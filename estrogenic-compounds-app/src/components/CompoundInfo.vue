<!-- src/components/CompoundInfo.vue -->
<template>
  <div>
    <pre>{{ compoundInfo }}</pre>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/config';

export default {
  name: 'CompoundInfo',
  props: ['compoundName'],
  data() {
    return {
      compoundInfo: null
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
        this.compoundInfo = response.data;
      } catch (error) {
        console.error('Error fetching compound info:', error);
      }
    }
  }
};
</script>