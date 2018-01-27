<template>
  <nav>
    <div
      v-for="(navItem, key) in navItems"
      :key="key"
      class="nav__item"
      :class="navItem.class"
    >
      #{{ navItem.name }}
    </div>
  </nav>
</template>

<script>export default {
  name: 'Nav',
  data () {
    return {
      navItems: [
        { name: 'highlights', class: 'highlight' },
        { name: 'articles', class: 'article' },
        { name: 'valerie', class: 'valerie' },
        { name: 'blogposts', class: 'blogpost' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

@mixin navColor($type) {
  &.#{$type} {
    color: map-get($colors, $type);

    &:hover {
      background: map-get($colors, $type);
      color: white;
    }
  }
}

nav {
 width: 80%;
 margin: 0 auto;
}

.nav__item {
  width: 110px;
  box-sizing: border-box;
  margin: 0 calc((100% - 440px) / 6);
  display: inline-block;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @each $type, $color in $colors {
    &.#{$type} {
      color: $color;

      &:hover {
        background: $color;
        color: white;
      }
    }
  }
}

</style>
