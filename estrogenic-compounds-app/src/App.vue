<!-- src/App.vue -->
<template>
  <div id="app">
    <AppTitle />
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive include="HomePage">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <AppNavigation />
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';
import AppNavigation from '@/components/AppNavigation.vue';

export default {
  name: 'App',
  components: {
    AppTitle,
    AppNavigation,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>