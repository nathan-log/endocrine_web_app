<!-- ResultDisplay.vue -->
<template>
  <div class="result-display">
    <div v-if="result.status === 'success'">
      <h2>
        <span :class="{ 'green': result.num_estrogenic_compounds === 0, 'red': result.num_estrogenic_compounds > 0 }">
          {{ result.num_estrogenic_compounds }}
        </span>
        Estrogenic Compounds Found
      </h2>
      <div class="analysis-container">
        <div class="info-section">
          <h3>Product Information</h3>
          <p><strong>Brand:</strong> {{ result.brand }}</p>
          <p><strong>Description:</strong> {{ result.description }}</p>
          <p><strong>Ingredients:</strong> {{ result.ingredients }}</p>
        </div>
        <div class="compounds-section">
          <h3>Estrogenic Compounds</h3>
          <ul>
            <li v-for="compound in result.estrogenic_compounds" :key="compound">
              <a @click="goToCompoundInfo(compound)" class="compound-link">{{ compound }}</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div v-else class="error-message">
      <p>{{ result.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  methods: {
    goToCompoundInfo(compoundName) {
      this.$router.push({ name: 'CompoundInfoPage', params: { compoundName } });
    }
  }
};
</script>

<style scoped>
@import '@/styles/variables.css';

.result-display {
  margin-top: var(--spacing-large);
}

h2 {
  font-size: var(--font-size-large);
  font-weight: bold;
  margin-bottom: var(--spacing-small);
  text-align: center;
}

.analysis-container {
  background-color: #ffffff;
  padding: var(--spacing-large);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}

.info-section,
.compounds-section {
  flex: 1;
}

.info-section {
  margin-right: var(--spacing-large);
}

h3 {
  font-size: var(--font-size-large-alt);
  font-weight: bold;
  margin-bottom: var(--spacing-small);
  color: var(--text-color-dark);
}

p {
  margin-bottom: var(--spacing-small);
  color: var(--text-color-light);
}

ul {
  list-style-type: none;
  padding-left: var(--spacing-medium);
}

li {
  position: relative;
  margin-bottom: var(--spacing-small);
  color: var(--text-color-dark);
}

li::before {
  content: '•';
  position: absolute;
  left: calc(-1 * var(--spacing-medium));
  color: var(--warning-color);
}

.compound-link {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.3s, transform 0.3s, font-size 0.3s;
  display: inline-block;
  cursor: pointer;
}

.compound-link:hover {
  color: var(--link-hover-color);
  transform: scale(1.05);
  font-size: 1.1em;
}

.error-message {
  color: var(--error-color);
  font-weight: bold;
}

.green {
  color: var(--success-color);
}

.red {
  color: var(--error-color);
}
</style>