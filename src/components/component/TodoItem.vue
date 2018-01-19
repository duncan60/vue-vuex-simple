<template>
  <li v-if="!todo.isEdit && !todo.isComplete">
    <span>
      {{ text }}
    </span>
    <button @click="onHandler('complete')">
      complete
    </button>
    <button @click="onHandler('edit')">
      edit
    </button>
  </li>
  <li v-else-if="todo.isComplete">
    <span>
      {{ todo.text }}
    </span>
    <button @click="onHandler('restore')">
      restore
    </button>
  </li>
  <li v-else>
    <input type="text" v-model="text">
    <button @click="onHandler('save')">
      save
    </button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['todo', 'edit', 'save', 'complete', 'restore'],
  data() {
    return {
      text: this.todo.text,
    };
  },
  methods: {
    onHandler(type) {
      this[type](this.todo, this.text);
    },
  },
};
</script>
