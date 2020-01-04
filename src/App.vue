<template>
  <div>
    <list-one/>
    <list-two/>
  </div>
</template>

<script>
import listOne from './components/listOne.vue';
import listTwo from './components/listTwo.vue';

export default {
  name: 'App',
  components: {
    listOne, listTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
