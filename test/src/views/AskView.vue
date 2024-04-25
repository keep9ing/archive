<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import ListMixin from '@/mixins/ListMixin';
import bus from '../utils/bus.js';

export default {
  components: {
    ListItem
  },
  mounted() {
    bus.$emit('end:spinner');
  },
  // mixins: [ListMixin],
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },

}
</script>

<style>

</style>