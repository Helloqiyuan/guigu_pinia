<script setup lang='ts'>
defineProps(['dataFa', 'add'])
</script>

<template>
    <h1>GrandChild :{{ dataFa }}</h1>
    <button @click="add()">点我加1</button>
</template>

<style scoped lang='scss'></style>
