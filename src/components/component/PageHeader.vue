<template>
  <header>
      <h1>Vue with Vuex Simple</h1>
      <nav>
        <ul class="nav-list">
          <router-link class="nav-list__link" to="/todo">Todo</router-link>
          <router-link class="nav-list__link" to="/fetch">Fetch</router-link>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style lang="scss">
.nav-list {
  padding: 0;
  &__link {
    padding: 10px;
  }
}
</style>
