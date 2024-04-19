<template>
  <div>
    ask

    <li v-for="(item, index) in ask" :key="index">{{ item.title }}</li>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    var vm = this; 
    fetchAskList()
      .then(function(response) {
        vm.ask = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
}
</script>

<style>

</style>