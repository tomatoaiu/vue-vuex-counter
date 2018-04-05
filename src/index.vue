<template>
<div>
    <counterA></counterA>
    <counterB></counterB>
</div>
</template>

<script>
import counterA from './components/a-counter'
import counterB from './components/b-counter'

export default {
    components: {
        "counterA" : counterA,
        "counterB" : counterB
    }
}
</script>

<style scoped>

</style>



