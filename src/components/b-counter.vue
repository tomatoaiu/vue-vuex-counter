<template>
  <div>
    B : {{countB}}
    <button @click="incrementb()">+</button>
    <button @click="decrementb()">-</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "b-counter",
    computed: {
        ...mapGetters({
            countB : "countB"
        })
    },
    methods: {
        incrementb(){
            this.$store.dispatch("incrementb");
        },
        decrementb(){
            this.$store.dispatch("decrementb");
        }
    }

}
</script>