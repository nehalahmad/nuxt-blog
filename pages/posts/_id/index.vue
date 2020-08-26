<template>
  <div class="single-page-post">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Updated on: {{ loadedPost.updatedAt | date }}
        </div>
        <div class="post-detail">Written by: {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get(`posts/${context.params.id}.json`)
      .then(data => ({ loadedPost: data }))
      .catch(context.error);
  },
  head: { title: "A blog post" }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
}
.post {
  width: 100%;
}
@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}
.post-title {
  margin: 0;
}
.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 768px) {
  .post-details {
    flex-direction: column;
  }
}
.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}
.post-content {
  margin: 10px 0;
}
.post-feedback {
  text-align: center;
}
.post-feedback a {
  color: red;
  text-decoration: none;
}
.post-feedback a:active,
.post-feedback a:hover {
  color: salmon;
}
</style>
