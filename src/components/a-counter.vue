<template>
  <div>
    A : {{countA}}
    <button @click="incrementa()">+</button>
    <button @click="decrementa()">-</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "a-counter",
    computed: {
        ...mapGetters({
            countA: "countA"
        })
    },
    methods: {
        incrementa(){
            this.$store.dispatch("incrementa");
        },
        decrementa(){
            this.$store.dispatch("decrementa");
        }
    }

}
</script>