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

.info-section,
.compounds-section {
  flex: 1;
}

.info-section {
  margin-right: 30px;
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

.compound-link {
  color: #4a90e2;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s, font-size 0.3s;
  display: inline-block;
}

.compound-link:hover {
  color: #2f6ea9;
  transform: scale(1.05);
  font-size: 1.1em;
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