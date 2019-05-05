<template>
  <div class="statement">
    <h4 class="title is-4">{{ number + 1 }}. {{ title() }}</h4>
    <p>{{ comment() }}</p>
    <p><span><strong>Padre Nostro</strong></span><span><strong>Aver Maria</strong></span></p>
  </div>
</template>

<script>
export default {
  name: "statement",
  props: {
    mystery: Array,
    number: Number
  },
  data() {
    return {
      verses: []
    };
  },
  methods: {
    title: function() {
      return this.mystery[this.number].title;
    },
    comment: function() {
      return this.mystery[this.number].comment;
    }
  }
};
</script>

<style scoped>
.statement p {
  padding-top: 2rem;
  padding-bottom: 1rem;
}
  .statement p span {
    display: block;
    padding-bottom: 1em;
  }
</style>
