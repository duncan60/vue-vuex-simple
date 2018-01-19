<template>
  <div>
    <h3>Todo Task</h3>
    <ul class="task-list">
      <TodoItem
        class="task-list__item"
        v-for="(item, key) in unCompleteTodos"
        :todo="item"
        :key="key"
        :edit="onEdit"
        :save="onSave"
        :complete="onComplete">
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
    updateTodos(todo) {
      this.$store.dispatch('updateTodo', todo);
    },
    updateField(field, value) {
      this.$store.dispatch('updateField', { field, value });
    },
    onAddTodo() {
      this.$store.dispatch('addNewTodo');
    },
    onEdit(todo) {
      this.updateTodos({
        ...todo,
        isEdit: true,
      });
    },
    onSave(todo, newText) {
      this.updateTodos({
        ...todo,
        text: newText,
        isEdit: false,
      });
    },
    onComplete(todo) {
      this.updateTodos({
        ...todo,
        isComplete: true,
      });
    },
    onRestore(todo) {
      this.updateTodos({
        ...todo,
        isComplete: false,
      });
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
