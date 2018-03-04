<template>
  <section>
    <div>
      <h2>Todo Page</h2>
      <TodoTask/>
      <hr/>
      <TodoComplete/>
    </div>
  </section>
</template>

<script>
import TodoTask from '@/components/containers/TodoTask';
import TodoComplete from '@/components/containers/TodoComplete';

export default {
  name: 'todoPage',
  components: { TodoTask, TodoComplete },
};
</script>

<style lang="scss">

</style>
