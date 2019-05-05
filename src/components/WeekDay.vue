<template>
  <div class="box" v-on:click="selectDay(mystery)">
    <p class="title is-5">{{ day }}</p>
    <p class="subtitle">Misteri {{ mystery }}</p>
  </div>
</template>

<script>
export default {
  name: "WeekDay",
  props: {
    day: String,
    mystery: String
  },
  methods: {
    selectDay(value) {
      this.$emit("selectedDay", value);
    }
  }
};
</script>

<style scoped></style>
