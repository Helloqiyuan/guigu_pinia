<script setup>
import useCountStore from '@/store/count'
const countStore = useCountStore()
console.log('countStore', countStore);
</script>

<template>
    <h1>{{ countStore.sum }}</h1>
</template>

<style scoped lang='scss'></style>
