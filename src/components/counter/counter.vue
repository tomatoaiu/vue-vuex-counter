<template>
  <main>
    <viewCounter></viewCounter>
    <counterA></counterA>
    <counterB></counterB>
  </main>
</template>

<script>
import counterA from "./a-counter"
import counterB from "./b-counter"
import viewCounter from "./view-counter"

export default {
  name: "counter",
  components: {
    counterA: counterA,
    counterB: counterB,
    viewCounter: viewCounter
  }
}
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
}
</style>
