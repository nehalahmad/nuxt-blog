<template>
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author">
      Author Name
    </app-control-input>
    <app-control-input v-model="editedPost.title">Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnail">
      Thumbnail
    </app-control-input>
    <div>
      <img :src="this.editedPost.thumbnail" alt="" width="100%" />
    </div>
    <app-control-input control-type="textarea" v-model="editedPost.content">
      Content
    </app-control-input>
    <app-control-input control-type="textarea" v-model="editedPost.previewText">
      Preview Text
    </app-control-input>
    <app-button
      type="button"
      style="margin-left:10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</app-button
    >
    <app-button type="submit">Update</app-button>
  </form>
</template>

<script>
export default {
  props: { post: Object },
  data() {
    return {
      editedPost: this.post
        ? this.post
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>
