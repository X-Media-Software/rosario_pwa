<template>
  <div class="columns is-centered is-multiline">
    <div class="column is-one-fifth" v-for="m in misteri" v-bind:key="m.key">
      <WeekDay
        v-bind:day="m.day"
        v-bind:mystery="m.mistero"
        v-on:selectedDay="selectDay"
      />
    </div>
  </div>
</template>

<script>
import WeekDay from "@/components/WeekDay.vue";
export default {
  name: "WeekMenu",
  components: { WeekDay },
  data() {
    return {
      misteri: {
        0: { day: "Lunedì", mistero: "Gioiosi" },
        1: { day: "Martedì", mistero: "Dolorosi" },
        2: { day: "Mercoledì", mistero: "Gloriosi" },
        3: { day: "Giovedì", mistero: "Luminosi" },
        4: { day: "Venerdi", mistero: "Dolorosi" },
        5: { day: "Sabato", mistero: "Gioiosi" },
        6: { day: "Domenica", mistero: "Gloriosi" }
      }
    };
  },
  methods: {
    selectDay(value) {
      this.$emit("selectDay", value);
    }
  }
};
</script>

<style scoped></style>
