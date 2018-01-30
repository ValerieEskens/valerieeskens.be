<template>
  <header>
    <div class="header__name">
      <img src="../assets/valerieeskens.svg" alt="">
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
    padding: 50px 5%;

    img {
      width: 100%;
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
