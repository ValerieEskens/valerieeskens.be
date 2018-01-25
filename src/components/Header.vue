<template>
  <header>
    <div class="header__photo">Header</div>
    <div class="header__my-photo">Photo</div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  position: relative;
}

.header__photo {
  border: 1px solid black;
  height: 200px;
  width: 100%;
}

.header__my-photo {
  border: 1px solid hotpink;
  border-radius: 50%;
  bottom: -50px;
  display: inline-block;
  height: 100px;
  margin-left: -50px;
  position: absolute;
  width: 100px;
}
</style>
