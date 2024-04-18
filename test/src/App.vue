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
</style>
