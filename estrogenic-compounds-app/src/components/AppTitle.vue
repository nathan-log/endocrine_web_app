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
  .app-title {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
  }
  
  h1 a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  h1 a:hover {
    color: #4a90e2;
  }
  </style>