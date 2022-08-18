<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    // computed: mapState(["count"]),
    countComputed() {
      return this.$store.state.counter.count;
    },
    // ...mapState({
    //   count: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    // }),
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
  },

  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      // this.randomInt();
      this.$store.commit("counter/incrementBy", 5);
    },
    // incrementRandomInt() {
    //   this.$store.dispatch("incrementRandomInt");
    // },
    // ...mapActions({
    //   randomInt: "incrementRandomInt",
    // }),
    ...mapActions("counter", ["incrementRandomInt"]),
  },
};
</script>

<style></style>
