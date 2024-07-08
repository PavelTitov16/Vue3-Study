<template>
  <div>
    <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Find Post" />
    <div class="app-btns">
      <my-button @click="showModal">Create Post</my-button>
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
    </div>
    <my-modal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </my-modal>
    <PostList v-if="!arePostsLoading" :posts="sortedAndFoundPosts" @remove="removePost" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import {
  mapState, mapGetters, mapActions, mapMutations,
} from 'vuex';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
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
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      arePostsLoading: (state) => state.post.arePostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndFoundPosts: 'post/sortedAndFoundPosts',
    }),
  },
};
</script>

<style>
.app-btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page-wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  background: none;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: gray;
}
</style>
