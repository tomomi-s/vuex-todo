<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';

export default {
  name: 'App',
  components: {
    Todos, AddTodo, FilterTodos
  }
}
</script>

<style>
body{
   font-family: Avenir, Helvetica, Arial, sans-serif;
   line-height: 1.4;
   background-color: #57B883;
   padding: 10px;
}

.container{
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
}

@media(max-width: 600px){
    .container{
      padding: 0;
    }
  }
</style>
