<template>
  <div class="highlight" @click="goToSource()">
      <img class="highlight__quote-icon" src="../../assets/quote.png" alt="quote">
      <div class="highlight__content">{{highlight}}</div>
      <div class="highlight__author">— {{author}}</div>
  </div>
</template>

<script>
export default {
  name: 'Highlight',
  props: ['source', 'author', 'highlight'],
  methods: {
    goToSource () {
      window.open(this.source)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/colors';

.highlight {
  padding: 30px 15px 15px;
  line-height: 1.4;
  text-align: left;
  font-size: 16px;
  position: relative;
  background-color: mix(map-get($colors, 'highlights'), #fff, 70%);
}

.highlight__author {
  font-style: italic;
  font-size: 14px;
}

.highlight__content {
  text-indent: 50px;
}

.highlight__quote-icon {
  opacity: .15;
  position: absolute;
  top: -24px;
  left: -15px;
  width: 100px;
}
</style>
