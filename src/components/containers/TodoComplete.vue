<template>
  <div>
    <h3>Todo Complete</h3>
    <ul class="task-list">
      <todo-item class="task-list__item task-list__item--complete"
                 v-for="(item, key) in completeTodos"
                 :todo="item"
                 :key="key"
                 :updateTodo="onUpdateTodo">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/widgets/TodoItem';

export default {
  components: { TodoItem },
  computed: {
    completeTodos() {
      return this.$store.getters.getTodos(true);
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
  },
};
</script>
