<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <app-admin-post-form @submit="onSubmitted"></app-admin-post-form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  methods: {
    ...mapActions(["addPost"]),
    onSubmitted(postsData) {
      this.addPost({ ...postsData, updatedAt: new Date() }).then(() =>
        this.$router.push("/admin")
      );
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
