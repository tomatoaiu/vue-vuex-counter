<template>
  <div>
    A : {{count}}
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <input type="number" v-model.number="inputCount" >
    <button @click="setCount({count: inputCount})">set</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers("a")

export default {
    name: "a-counter",
    data(){
        return {
            inputCount: 3
        }
    },
    computed: {
        ...mapGetters([
            "count"
        ])
    },
    methods: {
        ...mapActions([
            "increment",
            "decrement",
            "setCount"
        ]),
    }
}
</script>