<template>
  <nav>
    <div
      v-for="(navItem, key) in navItems"
      :key="key"
      class="nav__item"
    >
      {{ navItem.name }}
    </div>
  </nav>
</template>

<script>export default {
  name: 'Nav',
  data () {
    return {
      navItems: [
        { name: '#highlights' },
        { name: '#articles' },
        { name: '#valerie' },
        { name: '#blogposts' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
 width: 80%;
 margin: 0 auto;
}

.nav__item {
  width: 100px;
  box-sizing: border-box;
  margin: 0 calc((100% - 400px) / 6);
  padding: 20px 0;
  display: inline-block;

  &:first-child {
    margin-left: 0;
    text-align: left;
  }

  &:last-child {
    margin-right: 0;
    text-align: right;
  }
}
</style>
