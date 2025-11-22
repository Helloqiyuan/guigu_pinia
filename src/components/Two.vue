<script setup lang="ts">
import emitter from '@/utils/emitter';
import { ref } from 'vue';
const t = ref('')
emitter.on('getCount', (event) => {
    t.value = event as string
})
</script>

<template>
    <h1>two: {{ t }}</h1>
</template>

<style scoped lang='scss'></style>