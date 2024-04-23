<template>
  <div id="app">
    <top-area></top-area>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
/* Router Transition */
.page-ender-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
