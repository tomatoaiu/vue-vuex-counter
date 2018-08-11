<template>
  <section>
    <p>A</p>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <input type="number" v-model.number="inputCount" >
    <button @click="set({count:  parseInt(inputCount)})">set</button>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const { mapGetters, mapActions } = createNamespacedHelpers("a")

export default {
  name: "a-counter",
  data() {
    return {
      inputCount: 3
    }
  },
  computed: {
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions(["increment", "decrement", "set"])
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
