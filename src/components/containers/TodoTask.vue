<template>
  <div>
    <h3>Todo Task</h3>
    <ul class="task-list">
      <TodoItem
        class="task-list__item"
        v-for="(item, key) in unCompleteTodos"
        :todo="item"
        :key="key"
        :updateTodo="onUpdateTodo">
      </TodoItem>
      <li>
        <input
          placeholder="Enter text"
          v-model="newTodo"
        >
        <button @click="onAddTodo" :disabled="isDisabled">
          New Task
        </button>
      </li>
      </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/component/TodoItem';

export default {
  components: { TodoItem },
  computed: {
    unCompleteTodos() {
      return this.$store.getters.getTodos(false);
    },
    newTodo: {
      get() {
        return this.$store.state.todo.newTodo;
      },
      set(value) {
        this.$store.dispatch('updateField', { field: 'newTodo', value });
      },
    },
    isDisabled() {
      return this.$store.state.todo.newTodo === '';
    },
  },
  methods: {
    onUpdateTodo(type, todo, newText) {
      this.$store.dispatch('updateTodo', {
        type,
        todo,
        newText,
      });
    },
    updateField(field, value) {
      this.$store.dispatch('updateField', { field, value });
    },
    onAddTodo() {
      this.$store.dispatch('addNewTodo');
    },
  },
};
</script>

<style lang="scss">
.task-list {
  &__item {
    margin: 10px 0;
    &--complete {
      text-decoration: line-through;
    }
  }
}
</style>
