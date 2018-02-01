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
      visibility: hidden;
    }
  }
</style>
