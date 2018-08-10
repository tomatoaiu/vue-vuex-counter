<template>
  <div>
    B : {{count}}
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="asyncIncrement()">async +</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const { mapGetters, mapActions } = createNamespacedHelpers("b")

export default {
  name: "b-counter",
  computed: {
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions(["increment", "decrement", "asyncIncrement"])
  }
}
</script>
