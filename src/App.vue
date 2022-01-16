<script setup lang="ts">
</script>

<template>
  <header>
    <h1>CSS TRANSFORMS</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Translate</router-link>
        </li>
        <li>
          <router-link to="/scale">Scale</router-link>
        </li>
        <li>
          <router-link to="/rotate">Rotate</router-link>
        </li>
        <li>
          <router-link to="/skew">Skew</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
h1 {
  margin: 0;
}
header {
  display: grid;
  place-content: center;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-around;
}

.container {
  display: grid;
  place-content: center;
  gap: 1rem;
}
</style>
