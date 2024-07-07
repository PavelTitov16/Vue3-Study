<template>
  <div>
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
      posts: [
        { id: 1, title: 'JS', body: 'language with dynamic typification' },
        { id: 2, title: 'Vue', body: 'Framework for JS' },
        { id: 3, title: 'React', body: 'Library for JS' },
      ],
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
