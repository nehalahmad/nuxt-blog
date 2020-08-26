<template>
  <section class="posts">
    <template v-for="post in posts">
      <app-post-preview
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :content="post.content"
        :previewText="post.previewText"
        :thumbnail="post.thumbnail"
        :updatedAt="post.updatedAt"
        :is-admin="isAdmin"
      />
    </template>
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  components: { appPostPreview: PostPreview },
  props: {
    isAdmin: { type: Boolean, default: false },
    posts: { type: Array, required: true }
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
