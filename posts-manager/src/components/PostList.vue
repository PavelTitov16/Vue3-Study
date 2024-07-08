<template>
  <div v-if="posts.length > 0">
    <h3>Posts List</h3>
    <TransitionGroup name="post-list">
      <PostItem v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
    </TransitionGroup>
  </div>
  <h2 v-else>No posts</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
</style>
