<script setup lang="ts">
import { ref } from 'vue';

const rangeX = ref(0)
const rangeY = ref(0)

</script>

<template>
  <div class="container">
    <h2>Translate</h2>
    <input v-model="rangeX" type="range" step="10" max="200" />
    <input v-model="rangeY" type="range" step="10" max="200" />

    <p>translate({{ rangeX }}px, {{ rangeY }}px)</p>
    <div class="wrapper">
      <div :style="{ transform: `translate(${rangeX}px, ${rangeY}px)` }" class="box" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: dashed red 2px;
}

.box {
  width: 20rem;
  height: 20rem;
  background-image: linear-gradient(to top right, #f09, #3023AE, #0ff);
  padding: 4rem;
}
</style>
