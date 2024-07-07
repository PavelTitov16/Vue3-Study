<template>
  <div>
    <h3>Posts List</h3>
    <PostItem v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
  </div>
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

</style>
