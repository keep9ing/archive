<template>
  <div>
    <div class="user-container">
      <div>User
        <i class="fa-solid fa-user"></i>
      </div>
      <div>
        <!-- <router-link :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user}}
        </router-link>
        <div>{{ fetchedItem.time_age }}</div>         -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>