<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Count from './components/Count.vue';
import useLoveStore from '@/store/love'
const loveStore = useLoveStore()
const { love } = storeToRefs(loveStore)
console.log('loveStore', loveStore);
console.log('love', love);


</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <Count />
  {{ }}
</template>

<style scoped></style>
