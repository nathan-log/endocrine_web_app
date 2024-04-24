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
.compound-info {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.info-container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-section {
  margin-bottom: 20px;
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

a {
  color: #4a90e2;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.loading-message {
  color: #777777;
  font-weight: bold;
  text-align: center;
}
</style>
