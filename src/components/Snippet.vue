<template>
  <div class="snippet" @click="goToSource()" :style="{'background-image': `url(${image})`}">
      <div class="snippet__content">— {{content}}</div>
      <div class="snippet__author">— {{author}}</div>
  </div>
</template>

<script>
export default {
  name: 'Snippet',
  props: ['author', 'image', 'source', 'content'],
  methods: {
    goToSource () {
      window.open(this.source)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/colors';

.snippet {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.snippet__author {
  font-style: italic;
  font-size: 14px;
}

.snippet__content {
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
