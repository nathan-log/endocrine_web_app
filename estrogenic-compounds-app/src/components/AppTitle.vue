<!-- src/components/AppTitle.vue -->
<template>
  <div class="app-title">
    <h1><router-link to="/">Estrogenic Compounds in Foods</router-link></h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
};
</script>

<style scoped>
@import '@/styles/variables.css';

.app-title {
  text-align: center;
  padding: var(--spacing-medium);
}

h1 {
  font-size: var(--font-size-large);
  font-weight: bold;
  color: var(--text-color-dark);
}

h1 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

h1 a:hover {
  color: var(--link-color);
}
</style>