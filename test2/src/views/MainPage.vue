<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I learned</h1>
      <ul>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
        <!-- <li v-for="postItem in postItems" :key="postItem._id">
          <div calss="post-title">
            {{ postItem.title }}
          </div>
          <div calss="post-contents">
            {{ postItem.contents }}
          </div>
          <div calss="post-time">
            {{ postItem.createdAt }}
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/index';

export default {
  components: { PostListItem },
  component: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
