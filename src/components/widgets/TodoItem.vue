<template>
  <li v-if="!todo.isEdit && !todo.isComplete">
    <span>{{todo.text}}</span>
    <button @click="onHandler('complete')">
      complete
    </button>
    <button @click="onHandler('edit')">
      edit
    </button>
  </li>
  <li v-else-if="todo.isComplete">
    <span>{{todo.text}}</span>
    <button @click="onHandler('restore')">
      restore
    </button>
  </li>
  <li v-else>
    <input type="text" v-model="text">
    <button @click="onHandler('save')" :disabled="text === ''">
      save
    </button>
    <button @click="onHandler('cancel')">
      cancel
    </button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo', 'updateTodo'],
  data() {
    return {
      text: this.todo.text,
    };
  },
  methods: {
    onHandler(type) {
      this.updateTodo(type, this.todo, this.text);
      this.text = this.todo.text;
    },
  },
};
</script>
