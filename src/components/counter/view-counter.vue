<template>
  <section>
    <p class="count-a">A: {{countA}}</p>
    <p class="count-b">B: {{countB}}</p>
  </section>
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
}
</script>

<style scoped>
section {
  display: flex;
}

.count-a, .count-b {
  font-size: 9rem;
}

.count-a {
  margin-right: 2rem;
  color: cornflowerblue;
}

.count-b {
  color: darkorange;
}
</style>
