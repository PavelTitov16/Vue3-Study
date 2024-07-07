<template>
  <div class="app">
    <h1>Posts Manager</h1>
    <div class="app-btns">
      <my-button @click="showModal">Create Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-modal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </my-modal>
    <PostList v-if="!arePostsLoading" :posts="sortedPosts" @remove="removePost" />
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
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By description' },
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => post1[newValue]?.localeCompare(post2[newValue]));
    // },
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

.app-btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
