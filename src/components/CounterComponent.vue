<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <!-- <h2>Computed: {{ countComputed }}</h2> -->

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    // computed: mapState(["count"]),
    // countComputed() {
    //   return this.$store.state.count;
    // },
    // ...mapState({
    //   count: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    // }),
    ...mapState(["count", "lastMutation"]),
  },

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementBy() {
      // this.randomInt();
      this.$store.commit("incrementBy", 5);
    },
    // incrementRandomInt() {
    //   this.$store.dispatch("incrementRandomInt");
    // },
    ...mapActions({
      randomInt: "incrementRandomInt",
    }),
    // ...mapActions(["incrementRandomInt"]),
  },
};
</script>

<style></style>
