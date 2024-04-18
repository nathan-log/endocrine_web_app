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
            <li v-for="compound in result.estrogenic_compounds" :key="compound">{{ compound }}</li>
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
  props: ['result']
};
</script>

<style scoped>
.result-display {
  margin-top: 30px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.analysis-container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}

.info-section {
  flex: 1;
  margin-right: 30px;
}

.compounds-section {
  flex: 1;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555555;
}

p {
  margin-bottom: 10px;
  color: #777777;
}

ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  position: relative;
  margin-bottom: 10px;
  color: #555555;
}

li::before {
  content: '•';
  position: absolute;
  left: -20px;
  color: #ff6b6b;
}

.error-message {
  color: #ff4d4d;
  font-weight: bold;
}

.green {
  color: green;
}

.red {
  color: red;
}
</style>