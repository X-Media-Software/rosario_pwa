<template>
  <div class="home">
    <div class="main">
      <section class="header">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Il Rosario del Martedì
          </h1>
        </div>
      </section>
      <svg
        id="clouds"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="48"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          style="fill:#FFFFFF"
          d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z"
        ></path>
      </svg>
      <button
        class="home-button button is-pulled-left"
        v-on:click="selectDay(undefined)"
      >
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        <span>Home</span>
      </button>
      <section class="section" v-if="!selectedDay">
        <h3 class="title is-3">Seleziona il giorno della settimana</h3>
        <div class="container">
          <WeekMenu v-on:selectDay="selectDay" />
        </div>
      </section>
      <section class="section" v-else>
        <h4 class="title is-3">Misteri {{ selectedDay }}</h4>
        <div class="container">
          <Statement
            v-bind:mystery="mysteries"
            v-bind:number="currentStatementNumber"
          />
          <SequenceControl
            v-bind:number="currentStatementNumber"
            v-bind:upperLimit="upperLimitNumber"
            v-on:setNumber="setStatementNumber"
          />
        </div>
      </section>
    </div>
    <button
      class="info-button button is-rounded is-pulled-right"
      v-on:click="showInfos"
    >
      <span class="icon">
        <i class="fas fa-question"></i>
      </span>
    </button>
    <footer class="info columns is-pulled-right" v-show="showInfo">
      <div class="column is-4 is-offset-8 box">
        <div class="content">
          <span class="icon is-medium" v-on:click="showInfos">
            <i class="fas fa-times-circle"></i>
          </span>
          <p>
            <strong>Il Rosario del Martedì</strong> is developed by
            <a href="http://antoniofortino.it">Antonio Fortino</a> using
            Javascript, VueJS and Bulma. Thank you very much for using it.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import WeekMenu from "@/components/WeekMenu.vue";
import { Dolorosi, Gloriosi, Luminosi, Gioiosi } from "@/assets/misteri";
import Statement from "@/components/Statement.vue";
import SequenceControl from "@/components/SequenceControl.vue";

export default {
  name: "home",
  components: {
    Statement,
    WeekMenu,
    SequenceControl
  },
  data: function() {
    return {
      selectedDay: undefined,
      mysteries: [],
      currentStatementNumber: 0,
      upperLimitNumber: 5,
      showInfo: false
    };
  },
  methods: {
    selectDay(value) {
      this.currentStatementNumber = 0;
      this.mysteries = [];
      this.selectedDay = value;
      if (value === "Dolorosi") this.mysteries = Dolorosi;
      if (value === "Gioiosi") this.mysteries = Gioiosi;
      if (value === "Gloriosi") this.mysteries = Gloriosi;
      if (value === "Luminosi") this.mysteries = Luminosi;
    },
    setStatementNumber(value) {
      this.currentStatementNumber = value;
    },
    showInfos() {
      this.showInfo = !this.showInfo;
    }
  }
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 48px);
}
.header {
  padding-top: 1.5em;
  background-color: var(--header-bg-color);
}
.header h1 {
  font-family: "Tangerine", cursive;
  font-size: 4em;
}
.home-button {
  margin: 0.25em;
}
.info-button {
  margin: 0.25em;
}
.info {
  background-color: #ffffff;
  right: 0;
  bottom: 1em;
  position: fixed;
  min-height: 20px;
  margin: 0.25em;
}
.info .icon {
  position: absolute;
  top: -0.25em;
  right: -0.25em;
}
.info p {
  padding: 0.5em;
}
#clouds {
  background-color: var(--header-bg-color);
}
</style>
