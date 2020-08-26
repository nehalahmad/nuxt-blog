<template>
  <div class="posts-page"><app-post-list :posts="loadedPosts" /></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loadedPosts"])
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
