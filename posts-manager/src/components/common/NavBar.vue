<template>
  <div class="navbar">
    <h1>Posts Manager</h1>
    <div class="navbar-btns">
      <my-button @click="$router.push('/')">Main Page</my-button>
      <my-button @click="$router.push('/posts')">Posts Page</my-button>
      <my-button @click="$router.push('/store')">Posts In Store</my-button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar-btns {
  margin-left: auto;
  display: flex;
  gap: 20px;
}
</style>
