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
import { mapGetters, mapActions } from "vuex"

export default {
    name: "a-counter",
    data(){
        return {
            inputCount: 3
        }
    },
    computed: {
        ...mapGetters("a", [
            "count"
        ])
    },
    methods: {
        ...mapActions("a",[
            "increment",
            "decrement",
            "setCount"
        ]),
    }
}
</script>