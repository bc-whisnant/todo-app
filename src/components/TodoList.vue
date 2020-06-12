<template>
  <v-container class="px-0">
    <v-card flat class="mx-auto mt-5" max-width="">
      <v-form data-cy="form" @submit.prevent="addTodo">
        <BaseInput v-model="currentTodo" />
      </v-form>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="addTodo" id="submit_btn" data-cy="submit_btn"
          >Add Todo</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>

      <List :todos="todos" @removeItem="removeTodo" />
    </v-card>
  </v-container>
</template>

<script>
import BaseInput from "./BaseComponents/BaseInput";
import List from "./List";

export default {
  name: "TodoList",
  data() {
    return {
      currentTodo: "",
      todos: [],
    };
  },
  components: {
    List,
    BaseInput,
  },
  methods: {
    addTodo() {
      this.todos.push(this.currentTodo);
      this.currentTodo = "";
    },
    removeTodo(itemKey) {
      this.todos.shift(itemKey);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
