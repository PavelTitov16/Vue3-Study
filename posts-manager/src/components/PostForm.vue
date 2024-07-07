<template>
  <form @submit.prevent>
    <h4>Create a post!</h4>
    <!-- <div>
      <label for="title">
        Title
        <input  class="input" type="text" id="title" />
      </label>
    </div> -->
    <my-input label="Title" v-model="post.title" id="title" />
    <my-input label="Description" v-model="post.description" id="description" />
    <!-- <div>
      <label for="description">
        Description
        <input v-model="post.body" class="input" type="text" id="description" />
      </label>
    </div> -->
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
