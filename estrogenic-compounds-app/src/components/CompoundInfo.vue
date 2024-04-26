<!-- src/components/CompoundInfo.vue -->
<template>
  <div class="compound-info">
    <h2>{{ compoundInfo.title }}</h2>
    <div class="info-container">
      <div class="info-section">
        <h3>Compound Information</h3>
        <p><strong>Original Compound Name:</strong> {{ compoundInfo.orig_compound_name }}</p>
        <p><strong>Abstract:</strong> {{ compoundInfo.abstract }}</p>
        <p><strong>Link:</strong> <a :href="compoundInfo.link" target="_blank">{{ compoundInfo.link }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompoundInfo',
  props: ['compoundInfo']
};
</script>

<style scoped>
@import '@/styles/variables.css';

.compound-info {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-medium);
}

h2 {
  font-size: var(--font-size-large);
  font-weight: bold;
  margin-bottom: var(--spacing-small);
  text-align: center;
}

.info-container {
  background-color: #ffffff;
  padding: var(--spacing-large);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-section {
  margin-bottom: var(--spacing-medium);
}

h3 {
  font-size: var(--font-size-large-alt);
  font-weight: bold;
  margin-bottom: var(--spacing-small);
  color: var(--text-color-medium);
}

p {
  margin-bottom: var(--spacing-small);
  color: var(--text-color-light);
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.loading-message {
  color: var(--text-color-light);
  font-weight: bold;
  text-align: center;
}
</style>
