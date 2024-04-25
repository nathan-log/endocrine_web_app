<!-- src/components/LoadingSpinner.vue -->
<template>
    <div class="loading-spinner">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>
  </template>
  
  <script>
  import { VProgressCircular } from 'vuetify/components';
  
  export default {
    name: 'LoadingSpinner',
    components: {
      VProgressCircular,
    },
  };
  </script>
  
  <style scoped>
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  </style>