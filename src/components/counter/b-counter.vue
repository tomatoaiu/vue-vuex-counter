<template>
  <section>
    <p>B</p>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="asyncIncrement()">async +</button>
  </section>
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

<style scoped>
section {
  width: 50%;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

section * {
  margin-right: 1rem;
}

p {
  font-size: 3rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
</style>
