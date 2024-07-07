<template>
  <div class="app">
    <h1>Posts Manager</h1>
    <my-button @click="showModal" class="modal-btn">Create Post</my-button>
    <my-modal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </my-modal>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JS', body: 'language with dynamic typification' },
        { id: 2, title: 'Vue', body: 'Framework for JS' },
        { id: 3, title: 'React', body: 'Library for JS' },
      ],
      modalVisible: false,
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
