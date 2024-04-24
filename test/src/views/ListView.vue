<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  Components: {
    ListItem,
  },
  created() {
    console.log(this.$route.name)
  },
}
</script>

<style>

</style>