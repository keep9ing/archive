<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '@/mixins/ListMixin';


export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
}
</script>

<style>

</style>