<template>
  <div class="article" @click="goToSource()" :style="{'background-image': `url(${snippet.image})`}">
      <div class="article__author">— {{snippet.author}}</div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['snippet'],
  methods: {
    goToSource () {
      window.open(this.snippet.source)
    }
  },
  created () {
    console.log('snippet highlight', this.snippet)
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/colors';

.article {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow:
    2px 2px 3px 1px map-get($colors, 'article'),
    inset 0 0 5px 1px map-get($colors, 'article');
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
