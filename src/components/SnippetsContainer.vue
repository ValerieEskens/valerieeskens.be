<template>
  <div class="snippets">

    <component
      class="snippet"
      :class="snippet.type"
      v-for="(snippet, key) in randomizedSnippets"
      :key="`${snippet.type}-${key}`"
      :is="snippet.type"
      :snippet="snippet"
      :style="{'grid-area': snippet.enlarge}"
    >
    </component>
  </div>
</template>

<script>
import Highlight from '@/components/snippets/Highlight.vue'
import highlights from '@/data/highlights.json'
import WebArticle from '@/components/snippets/Article.vue'
import articles from '@/data/articles.json'

export default {
  name: 'SnippetsContainer',
  components: { Highlight, WebArticle },
  data () {
    return {
      highlights: highlights,
      articles: articles,
      snippets: [...articles, ...highlights, ...articles, ...highlights],
      enlargeAreas: ['a', 'b']
    }
  },
  computed: {
    randomizedSnippets () {
      let currentIndex = this.snippets.length
      let myRandomizedSnippets = this.snippets.slice(0)
      while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        let temporarySnippet = myRandomizedSnippets[currentIndex]
        myRandomizedSnippets[currentIndex] = myRandomizedSnippets[randomIndex]
        myRandomizedSnippets[randomIndex] = temporarySnippet
        myRandomizedSnippets[randomIndex].enlarge = this.randomEnlarge()
      }
      return myRandomizedSnippets
    }
  },
  methods: {
    randomEnlarge () {
      if (this.enlargeAreas.length > 0) {
        let enlargeIndex = Math.floor(Math.random() * this.enlargeAreas.length)
        let enlargeArea = this.enlargeAreas[enlargeIndex]
        this.enlargeAreas.splice(enlargeIndex, 1)
        return enlargeArea
      }
      return ''
    }
  }
}
</script>
