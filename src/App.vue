<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Todo List</v-toolbar-title>
        
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-clipboard</v-icon>
      </v-btn>
     
     
    
    </v-app-bar>

    <v-content>
      <TodoList/>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
  }
};
</script>
