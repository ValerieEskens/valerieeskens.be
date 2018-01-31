<template>
  <div class="highlight" @click="goToSource()">
      <img class="quote-icon" src="../../assets/quote.png" alt="quote">
      <div class="highlight__content">{{snippet.highlight}}</div>
      <div class="highlight__author">— {{snippet.author}}</div>
  </div>
</template>

<script>
export default {
  name: 'Highlight',
  props: ['snippet'],
  methods: {
    goToSource () {
      window.open(this.snippet.source)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/colors';

.highlight {
  padding-top: 30px;
  line-height: 1.4;
  text-align: left;
  font-size: 16px;
  position: relative;
  background-color: mix(map-get($colors, 'highlight'), #fff, 70%);
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
