<template>
  <div>
    A : {{countA}} 
    B : {{countB}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "view-counter",
  computed: {
    ...mapGetters({
      countA: "a/count",
      countB: "b/count"
    })
  }
};
</script>
