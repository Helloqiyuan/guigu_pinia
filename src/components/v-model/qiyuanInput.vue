<script setup lang='ts'>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>

<style scoped lang='scss'></style>
