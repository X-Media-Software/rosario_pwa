<template>
  <div class="home">
    <div class="main">
      <section class="header">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Rosario
          </h1>
          <h3 class="subtitle is-3">
            Il rosario del Martedì
          </h3>
        </div>
      </section>
      <section class="section" v-if="!selectedDay">
        <h3 class="title is-3">Seleziona il giorno della settimana</h3>
        <div class="container">
          <WeekMenu v-on:selectDay="selectDay" />
        </div>
      </section>
      <section class="section" v-else>
        <h3 class="title is-3">Misteri {{ selectedDay }}</h3>
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
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Developed by Antonio Fortino
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import WeekMenu from "@/components/WeekMenu.vue";
import { Dolorosi } from "@/assets/misteri";
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
      upperLimitNumber: 5
    };
  },
  methods: {
    selectDay(value) {
      this.selectedDay = value;
      if (value === "Dolorosi") this.mysteries = Dolorosi;
    },
    setStatementNumber(value) {
      this.currentStatementNumber = value;
    }
  }
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 6rem);
}
.header {
  padding: 1.5em;
}
.footer {
  max-height: 40px;
  padding-bottom: 48px;
}
</style>
