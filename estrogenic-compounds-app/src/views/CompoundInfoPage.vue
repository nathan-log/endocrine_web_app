<!-- src/views/CompoundInfoPage.vue -->
<!-- src/views/CompoundInfoPage.vue -->
<template>
  <div class="compound-info-page">
    <button class="back-button" @click="goBack">&#8592; Back</button>
    <div v-if="compoundInfoArray.length > 0">
      <CompoundInfo
        v-for="(compoundInfo, index) in compoundInfoArray"
        :key="index"
        :compound-info="compoundInfo"
      />
    </div>
    <div v-else class="loading-message">
      <p>Loading compound information...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/config';
import CompoundInfo from '@/components/CompoundInfo.vue';

export default {
  name: 'CompoundInfoPage',
  components: {
    CompoundInfo
  },
  props: ['compoundName'],
  data() {
    return {
      compoundInfoArray: []
    };
  },
  mounted() {
    this.fetchCompoundInfo(this.compoundName);
  },
  methods: {
    async fetchCompoundInfo(compoundName) {
      try {
        const response = await axios.get(`${config.baseURL}/compound-info`, {
          params: {
            compound_name: compoundName
          }
        });
        this.compoundInfoArray = response.data;
      } catch (error) {
        console.error('Error fetching compound info:', error);
      }
    },
    goBack() {
      this.$router.push({ name: 'HomePage' });
    }
  }
};
</script>

<style scoped>
.compound-info-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background-color: transparent;
  border: none;
  color: #4a90e2;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-bottom: 20px;
  text-decoration: none;
  transition: color 0.3s;
}

.back-button:hover {
  color: #2f6ea9;
}
</style>