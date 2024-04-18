<template>
  <div>
    <div v-for="(user, index) in users" :key="index">{{key}}{{ index }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}
</script>

<style>

</style>