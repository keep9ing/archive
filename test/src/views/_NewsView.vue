<template>
  <div>
    <!-- <div v-for="(user, index) in this.$store.state.news" :key="index">{{ user.title }}</div> -->
    <p v-for="(item, index) in this.$store.state.news" :key="index">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js';

export default {
  // data() {
  //   return {
  //     users: [],
  //   }
  // },
  created() {
    console.log('호출 전: ', this);
    // var vm = this;
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // 1
    // fetchNewsList()
    //   // .then(function(response) {
    //   //   console.log('호출 후: ', this);
    //   //   console.log('response:', response)
    //   //   // vm.users = response.data
        
    //   // })
    //   // 2
    //   .then(response => this.users = response.data)
    //   // .catch(function(error) {
    //   //   console.log(error);
    //   // })
    //   .catch(error => console.log(error));
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>