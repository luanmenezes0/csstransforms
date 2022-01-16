<script setup lang="ts">
import { ref } from 'vue';

const percentage = ref(0.2)

</script>

<template>
  <div class="container">
    <h2>Scale</h2>
    <div class="form-group">
      <label for="scaleBy">Scale by</label>
      <input id="scaleBy" type="number" v-model="percentage" step="0.1" />
    </div>

    <div class="box">
      <p>HOVER ME</p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin: 0;
  font-weight: 500;
  padding: 0;
}
label {
  color: white;
  margin: 0;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 2rem;
}

input {
  height: 2rem;
  font-size: 1rem;
}
.box {
  --percentage: v-bind(percentage);
  --grow-by: calc(1 + var(--percentage));
  --shrink-by: calc(1 - var(--percentage) / var(--grow-by));

  width: 20rem;
  height: 20rem;
  background-color: purple;
  padding: 4rem;
  display: grid;
  place-content: center;
}

.box:hover {
  transform: scaleX(var(--grow-by));
}

.box:hover p {
  transform: scaleX(var(--shrink-by));
}
</style>
