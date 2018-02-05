<template>
  <div class="snippet" :class="{'snippet--quote': isQuote, 'snippet--image': !!image}" @click="goToSource()" :style="{'background-image': `url(${image})`}">
      <img v-if="isQuote" class="quote-icon" src="../assets/quote.png" alt="quote">
      <div class="snippet__content-wrapper">
        <div class="snippet__content">{{content}}</div>
        <div class="snippet__author">— {{author}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Snippet',
  props: ['author', 'image', 'source', 'content', 'type'],
  methods: {
    goToSource () {
      window.open(this.source)
    }
  },
  computed: {
    isQuote () {
      debugger
      return this.type === 'quote'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/colors';

.snippet {
  background-color: rgba(255, 255, 255, .7);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: 10px;
  text-align: left;
}

.snippet--image {
  .snippet__content-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .7);
    color: white;
  }
}

.snippet--quote {
  padding-top: 30px;

  .snippet__content {
    text-indent: 50px;
  }
}

.snippet__author {
  font-style: italic;
  font-size: 14px;
}

.quote-icon {
  opacity: .15;
  position: absolute;
  top: -24px;
  left: -15px;
  width: 90px;
}

</style>
