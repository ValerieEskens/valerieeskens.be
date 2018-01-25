<template>
  <nav>
    <div class="nav--left">
      <div
        v-for="(navItem, key) in leftNav"
        :key="key"
        class="nav__item"
      >
        {{ navItem.name }}
      </div>
    </div>
    <div class="nav--right">
      <div
        v-for="(navItem, key) in rightNav"
        :key="key"
        class="nav__item"
      >
        {{ navItem.name }}
      </div>
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
  },
  computed: {
    halfNav () {
      return this.navItems.length / 2
    },
    leftNav () {
      return this.navItems.slice(0, this.halfNav)
    },
    rightNav () {
      return this.navItems.slice(this.halfNav)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 50px;
  position: relative;
}

.nav--left, .nav--right {
  position: absolute;
  width: calc(50% - 50px);
}

.nav--left {
  left: 0;
}

.nav--right {
  right: 0;
}

.nav__item {
  display: inline-block;
  padding: 20px 10%;

  &:first-child {
    padding-left: 15%;
  }

  &:last-child {
    padding-right: 15%;
  }
}
</style>
