<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <img src="./assets/logo.png">
    <Hello></Hello>
  </div>
</template>

<script>
import Vue from 'vue'
import Hello from './components/Hello'
import { Header } from 'mint-ui';
export default {
  name: 'app',
  components: {
    Hello
  }
}
Vue.component(Header.name, Header);
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
