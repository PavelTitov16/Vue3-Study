<template>
  <div>
    <my-input v-focus v-model="searchQuery" placeholder="Find Post" />
    <div class="app-btns">
      <my-button @click="showModal">Create Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
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
import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndFoundPosts from '@/hooks/useSortedAndFoundPosts';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      modalVisible: false,
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By description' },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, arePostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndFoundPosts } = useSortedAndFoundPosts(sortedPosts);

    return {
      posts,
      totalPages,
      arePostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndFoundPosts,
    };
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
