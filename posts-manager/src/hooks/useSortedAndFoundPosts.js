import {
  ref,
  computed,
} from 'vue';

function useSortedAndFoundPosts(sortedPosts) {
  const searchQuery = ref('');
  const sortedAndFoundPosts = computed(() => sortedPosts.value
    .filter((post) => post.title.toLowerCase().includes(searchQuery.value.toLowerCase())));

  return {
    searchQuery,
    sortedAndFoundPosts,
  };
}

export default useSortedAndFoundPosts;
