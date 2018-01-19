<template>
  <main id="app">
    <header>
      <h1>Vue with Vuex Simple</h1>
      <nav>
        <ul class="nav-list">
          <router-link class="nav-list__link" to="/todo">Todo</router-link>
          <router-link class="nav-list__link" to="/fetch">Fetch</router-link>
        </ul>
      </nav>
    </header>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
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
.nav-list {
  padding: 0;
  &__link {
    padding: 10px;
  }
}
</style>
