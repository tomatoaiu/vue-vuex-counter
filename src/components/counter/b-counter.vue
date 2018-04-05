<template>
  <div>
    B : {{count}}
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "b-counter",
    computed: {
        ...mapGetters("b", [
            "count"
        ])
    },
    methods: {
        ...mapActions("b",[
            "increment",
            "decrement"
        ])
    }

}
</script>