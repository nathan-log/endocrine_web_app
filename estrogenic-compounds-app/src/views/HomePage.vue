<!-- src/views/HomePage.vue -->
<template>
  <div class="home">
    <BarcodeScannerForm @submit="getEstrogenicCompounds" @clear="clearResults" />
    <LoadingSpinner v-if="loading" />
    <ResultDisplay v-if="result" :result="result" />
  </div>
</template>
  
  <script>
  import BarcodeScannerForm from '@/components/BarcodeScannerForm.vue';
  import ResultDisplay from '@/components/ResultDisplay.vue';
  import LoadingSpinner from '@/components/LoadingSpinner.vue';
  import axios from 'axios';
  import config from '@/config';
  
  export default {
    name: 'HomePage',
    components: {
      BarcodeScannerForm,
      ResultDisplay,
      LoadingSpinner
    },
    data() {
      return {
        result: null,
        loading: false
      };
    },
    methods: {
      async getEstrogenicCompounds(barcode) {
        try {
          this.loading = true;
          const response = await axios.get(`${config.baseURL}/estrogenic-compounds-details`, {
            params: {
              barcode: barcode
            }
          });
          this.result = response.data;
        } catch (error) {
          console.error('Error:', error);
        } finally {
          this.loading = false;
        }
      },
      clearResults() {
        this.result = null;
        this.loading = false;
      },
    }
  };
  </script>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>