<template>
  <div id="app">
    <top-area></top-area>
    <router-view></router-view>
  </div>
</template>

<script>
import TopArea from './components/TopArea.vue';

export default {
  name: 'App',
  components: {
    TopArea,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #666;
}
</style>
