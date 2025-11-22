<script setup>
import emitter from '@/utils/emitter';
import { onMounted } from 'vue';
onMounted(() => {
    emitter.emit('getCount', 'CountData')
})
</script>

<template>
    <h1>Count</h1>
</template>

<style scoped lang='scss'></style>
