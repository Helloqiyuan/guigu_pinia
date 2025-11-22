<script setup lang='ts'>
import { ref } from 'vue';
import Child from './Child.vue';
const dataFa = ref(5)

const add = () => {
    dataFa.value += 1
}

</script>

<template>
    <h1>Father:{{ dataFa }}</h1>
    <Child :dataFa="dataFa" :add />
</template>

<style scoped lang='scss'></style>
