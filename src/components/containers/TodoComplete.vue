<template>
  <div>
    <h3>Todo Complete</h3>
    <ul class="task-list">
      <todo-item
          class="task-list__item--complete"
          v-for="(item) in completeTodos"
          :todo="item"
          :key="item.id"
          :restore="onRestore">
        </todo-item>
      </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/component/TodoItem';

export default {
  components: { TodoItem },
  computed: {
    completeTodos() {
      return this.$store.getters.getTodos(true);
    },
  },
  methods: {
    updateTodos(todo) {
      this.$store.dispatch('updateTodo', todo);
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
