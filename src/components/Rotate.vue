<script setup lang="ts">
import { ref } from 'vue';

const turn = ref(0)
const degrees = ref(0)

</script>

<template>
  <div class="container">
    <h2>Rotate</h2>

    <input v-model="degrees" type="range" step="10" max="360" />

    <p>rotate({{ degrees }}deg)</p>
    <div class="wrapper">
      <div :style="{ transform: `rotate(${degrees}deg)` }" class="box" />
    </div>

    <input v-model="turn" type="range" step="0.1" max="1" />

    <p>rotate({{ turn }}turn)</p>
    <div class="wrapper">
      <div :style="{ transform: `rotate(${turn}turn)` }" class="box" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: dashed red 2px;
}

.box {
  width: 12rem;
  height: 12rem;
  background-image: linear-gradient(45deg, #6303B1, #ff0099);
  padding: 4rem;
}
</style>
