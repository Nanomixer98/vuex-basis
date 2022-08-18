<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CounterComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    CounterComponent: defineAsyncComponent(() =>
      import("@/components/CounterComponent.vue")
    ),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
