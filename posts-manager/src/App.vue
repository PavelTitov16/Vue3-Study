<template>
  <div class="app">
    <PostForm />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
  components: {
    PostForm, PostList,
  },
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

</style>
