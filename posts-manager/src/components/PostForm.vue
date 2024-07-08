<template>
  <form @submit.prevent>
    <h4>Create a post!</h4>
    <my-input label="Title" v-focus v-model="post.title" id="title" />
    <my-input label="Description" v-model="post.body" id="description" />
    <my-button class="form-btn" @click="createPost">Create post</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.form-btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
