<!-- src/components/AppNavigation.vue -->
<template>
  <nav>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>

<style scoped>
@import '@/styles/variables.css';

nav {
  padding: var(--spacing-medium);
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 var(--spacing-small);
}

nav ul li a {
  color: var(--text-color-medium);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: var(--link-color);
}
</style>