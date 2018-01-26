<template>
  <header>
    <div class="header__name">
      <img src="../assets/valerie.svg" alt="">
      <img src="../assets/eskens.svg" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
header {
  position: relative;
}

.header__name {
  border: 1px solid black;
  padding: 80px 0;

  img {
    width: 49%;
}
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
