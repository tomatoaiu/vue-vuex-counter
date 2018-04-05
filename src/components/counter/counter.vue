<template>
<div>
    <counterA></counterA>
    <counterB></counterB>
</div>
</template>

<script>
import counterA from './a-counter'
import counterB from './b-counter'

export default {
    name: "counter",
    components: {
        "counterA" : counterA,
        "counterB" : counterB
    }
}
</script>

<style scoped>

</style>



