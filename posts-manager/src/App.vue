<template>
  <div class="app">
    <h1>Posts Manager</h1>
    <!-- <my-button @click="fetchPosts">Get posts!</my-button> -->
    <my-button @click="showModal" class="modal-btn">Create Post</my-button>
    <my-modal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </my-modal>
    <PostList v-if="!arePostsLoading" :posts="posts" @remove="removePost" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from 'axios';

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      arePostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((currentPost) => currentPost.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        this.arePostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        alert('Error!');
      } finally {
        this.arePostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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

.modal-btn {
  margin: 15px 0;
}
</style>
