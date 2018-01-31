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
        { name: 'blogposts', class: 'blogpost' }
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
  width: 90%;
  margin: 0 auto;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}

.nav__item {
  z-index: 1;
  margin: 20px;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

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

@media all and (max-width: 600px) {
    .nav__item {
        font-size: 17px !important;
    }
}

@media all and (max-width: 550px) {
  nav {
    flex-flow: column wrap;
    padding: 0;
  }

  .nav__item {
    border-top: 1px solid rgba(255,255,255,0.3);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin: 0px !important;
  }

  .nav__item:last-child {
    border-bottom: none;
  }
}

</style>
