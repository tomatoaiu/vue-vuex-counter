<template>
  <div>
    <counterA></counterA>
    <counterB></counterB>
    <viewCounter></viewCounter>
  </div>
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

</style>
