<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: white;
  background-color: #efefee;
  display: flex;
  padding: 8px;
  gap: 8px;
}
.header .router-link-exact-active {
  color: #0087b4;
}
</style>