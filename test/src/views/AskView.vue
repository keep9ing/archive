<template>
  <div>
    <!-- <li v-for="(item, index) in this.$store.state.ask" :key="index">{{ item.title }}</li> -->

    <!-- <p v-for="(item, index) in this.$store.state.ask" :key="index"> -->
    <p v-for="(item, index) in fetchedAsk" :key="index">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  computed: {
    // 1 
    // ask() {
    //   return this.$store.state.ask;
    // }

    // 2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })
    
    // 객체 표기법.. 배열 표기법 ??? TODO : 중급 들으러 다시 고고
    ...mapGetters([
      'fetchedAsk'
    ]),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
    // var vm = this; 
    // fetchAskList()
    //   .then(function(response) {
    //     vm.ask = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
}
</script>

<style>

</style>