<template>
  <div>
    <!-- item -->
    <!-- <p>{{ this.$store.state.item.title }}</p> -->
    <!-- 질문 상세 정보 -->
    <section>
      <user-profile :info="fetchedItem"></user-profile>
      <div class="user-container">
        <div>User<i class="fa-solid fa-user"></i>
        </div>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user}}
          </router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>        
        </div>
          <h2>{{ fetchedItem.title }}</h2>        
      </div>
    </section>
    <!-- 질문 댓글 -->

    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
    <!-- <p>{{ fetchedItem.title }}</p>
    <div>
      {{ fetchedItem.content }}
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>
</style>