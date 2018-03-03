<template>
  <main id="app">
    <PageHeader/>
    <router-view/>
  </main>
</template>

<script>
import PageHeader from '@/components/widgets/PageHeader';

export default {
  name: 'App',
  components: { PageHeader },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
</style>
