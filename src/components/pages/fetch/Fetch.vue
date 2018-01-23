<template>
  <section>
    <div>
      <h2>Fetch Page</h2>
      <button @click="onGetFetch">get fetch</button>
      <p>
        {{data}}
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'fetch',
  computed: mapState({
    data(state) {
      return state.fetch.data;
    },
  }),
  methods: {
    onGetFetch() {
      this.$store.dispatch('fetchAPI');
    },
  },
};
</script>

<style lang="scss">

</style>
