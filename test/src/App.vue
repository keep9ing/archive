<template>
  <div id="app">
    <top-area></top-area>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner-bar :loading="loadingStatus"></spinner-bar>
  </div>
</template>

<script>
import TopArea from './components/TopArea.vue';
import SpinnerBar from './components/SpinnerBar.vue';
import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    TopArea,
    SpinnerBar,
  },
  data() {
    return {
      loadingStatus : false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    // bus.$on('start:spinner', () => this.loadingStatus = true);
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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
