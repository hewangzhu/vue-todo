<template>
  <div id="app" class="container">
    <div class="todo-wrapper">
      <todo-header></todo-header>
      <div class="todo-content">
        <todo-report></todo-report>
        <todo-list></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import todoHeader from './todoHeader';
import todoReport from './todoReport';
import todoList from './todoList';
// 引用组件

export default {
  components:{
    todoReport,
    todoHeader,
    todoList
  }
}
</script>

<style lang="stylus">
body
  background red
</style>
