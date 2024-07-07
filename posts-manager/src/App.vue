<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Create a post!</h4>
      <div>
        <label for="title">
          Title
          <input
          v-bind:value="title"
          @input="title = $event.target.value"
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
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          id="description" />
        </label>
      </div>
      <button @click="createPost" class="form-btn">Create post</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Title: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      posts: [
        { id: 1, title: 'JS', body: 'language with dynamic typification' },
        { id: 2, title: 'Vue', body: 'Framework for JS' },
        { id: 3, title: 'React', body: 'Library for JS' },
      ],
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };

      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

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
