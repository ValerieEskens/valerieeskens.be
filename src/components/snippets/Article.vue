<template>
  <div class="article" @click="goToSource()" :style="{'background-image': `url(${image})`}">
      <div class="article__author">— {{author}}</div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  // props: ['snippet'],
  props: ['author', 'image', 'source'],
  methods: {
    goToSource () {
      window.open(this.source)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/colors';

.article {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.highlight__author {
  font-style: italic;
  font-size: 14px;
}

.highlight__content {
  text-indent: 50px;
}

.quote-icon {
  opacity: .15;
  position: absolute;
  top: -24px;
  left: -15px;
  width: 100px;
}

</style>
