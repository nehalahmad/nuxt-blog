<template>
  <div class="admin-post-page">
    <section class="update-post-form">
      <app-admin-post-form
        :post="loadedPost"
        @submit="onSubmitted"
      ></app-admin-post-form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  asyncData(context) {
    return context.app.$axios
      .$get(`posts/${context.params.postId}.json`)
      .then(data => ({ loadedPost: data }))
      .catch(context.error);
  },
  methods: {
    ...mapActions(["editPost"]),
    onSubmitted(postsData) {
      const id = this.$route.params.postId;
      const post = { ...postsData, id, updatedAt: new Date() };
      this.editPost(post).then(() => this.$router.push("/admin"));
    }
  }
};
</script>

<style scoped>
.update-post-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-post-form {
    width: 500px;
  }
}
</style>
