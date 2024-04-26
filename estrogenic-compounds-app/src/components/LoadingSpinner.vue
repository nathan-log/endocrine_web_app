<!-- src/components/LoadingSpinner.vue -->
<template>
  <div class="loading-spinner">
    <v-progress-circular indeterminate :size="spinnerSize"></v-progress-circular>
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
@import '@/styles/variables.css';

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--spinner-container-height);
}

.v-progress-circular {
  width: var(--spinner-size);
  height: var(--spinner-size);
}
</style>