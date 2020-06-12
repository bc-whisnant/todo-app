<template>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      {{ todo }} 
      <v-icon @click="removeTodo(index)">mdi-delete</v-icon>
    </li>
  </ul>

</template>

<script>
  export default {
    name: 'List',
    props: ['todos'],
    methods: {
      removeTodo() {
        this.$emit('removeItem')
      }
    }
  }
</script>

<style scoped>

li {
  margin-bottom: 5%;
}
</style>
