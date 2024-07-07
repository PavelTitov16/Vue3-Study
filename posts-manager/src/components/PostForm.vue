<template>
  <form @submit.prevent>
    <h4>Create a post!</h4>
    <div>
      <label for="title">
        Title
        <input
          v-bind:value="post.title"
          @input="post.title = $event.target.value"
          class="input"
          type="text"
          id="title"
        />
      </label>
    </div>
    <div>
      <label for="description">
        Description
        <input
          v-bind:value="post.body"
          @input="post.body = $event.target.value"
          class="input"
          type="text"
          id="description"
        />
      </label>
    </div>
    <button @click="createPost" class="form-btn">Create post</button>
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
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.form-btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
