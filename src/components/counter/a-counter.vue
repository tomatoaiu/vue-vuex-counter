<template>
  <div>
    A : {{count}}
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "a-counter",
    computed: {
        ...mapGetters("a", [
            "count"
        ])
    },
    methods: {
        ...mapActions("a",[
            "increment",
            "decrement"
        ])
    }

}
</script>