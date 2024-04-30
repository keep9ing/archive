<template>
  <li>
    <div calss="post-title">
      {{ postItem.title }}
    </div>
    <div calss="post-contents">
      {{ postItem.contents }}
    </div>
    <div calss="post-time">
      {{ postItem.createdAt }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
