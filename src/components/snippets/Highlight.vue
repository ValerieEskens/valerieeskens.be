<template>
  <div class="highlight" @click="goToSource()">
      <img class="quote-icon" src="../../assets/quote.png" alt="quote">
      <div class="highlight__content">{{ content }}</div>
      <div class="highlight__author">— {{ author }}</div>
  </div>
</template>

<script>
export default {
  name: 'Highight',
  props: {
    content: String,
    source: String,
    author: String
  },
  methods: {
    goToSource () {
      window.open(this.source)
    }
  }
}
</script>

<style scoped>
.highlight {
  padding: 20px;
  padding-top: 30px;
  line-height: 1.4;
  text-align: left;
  font-size: 16px;
  position: relative;
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

/* .quote-icon {
  opacity: .15;
  position: absolute;
  bottom: -24px;
  right: -15px;
  width: 100px;
  transform: scale(-1);
} */
</style>
