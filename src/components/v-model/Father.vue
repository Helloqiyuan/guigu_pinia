<script setup lang='ts'>
import { ref } from 'vue';
import qiyuanInput from './qiyuanInput.vue';
const data = ref('')
</script>

<template>
    <h1>data:{{ data }}</h1>
    <qiyuanInput v-model="data" />
</template>

<style scoped lang='scss'></style>
