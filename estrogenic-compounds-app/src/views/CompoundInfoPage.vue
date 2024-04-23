<!-- src/views/CompoundInfo.vue -->
<template>
  <div class="compound-info">
    <AppTitle />
    <h2>Compound Name: {{ compoundName }}</h2>
    <CompoundInfo :compound-name="compoundName" />
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';
import CompoundInfo from '@/components/CompoundInfo.vue';

export default {
  name: 'CompoundInfoPage',
  components: {
    AppTitle,
    CompoundInfo
  },
  props: ['compoundName']
};
</script>

<style scoped>
/* Add any styles specific to CompoundInfo view */
</style>