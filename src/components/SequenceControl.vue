<template>
  <div class="columns is-mobile">
    <div class="column">
      <button
        class="button is-large"
        v-on:click="decrease"
        v-bind:disabled="index === 0"
      >
        Indietro
      </button>
    </div>
    <div class="column">
      <button
        class="button is-large"
        v-on:click="increase"
        v-bind:disabled="index === upperLimit - 1"
      >
        Avanti
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SequenceControl",
  props: {
    number: Number,
    upperLimit: Number
  },
  data() {
    return {
      index: this.number
    };
  },
  methods: {
    increase() {
      this.index += this.index < this.upperLimit - 1 ? 1 : 0;
      this.$emit("setNumber", this.index);
    },
    decrease() {
      this.index -= this.index >= 1 ? 1 : 0;
      this.$emit("setNumber", this.index);
    }
  }
};
</script>

<style scoped></style>
