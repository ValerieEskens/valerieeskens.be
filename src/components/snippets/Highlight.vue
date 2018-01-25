<template>
  <div class="highlight" @click="goToSource()">
      <div v-html="content" class="highlight__content"></div>
      <div class="highlight__author">{{ author }}</div>
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
