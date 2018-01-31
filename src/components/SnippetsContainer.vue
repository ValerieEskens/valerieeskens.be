<template>
  <div>
    <p @click="filter('highlight')">highlights</p>
    <p @click="filter('article')">articles</p>
    <p>blogposts</p>
    <p>valerie</p>
    <div class="snippets">
      <component
        class="snippet"
        :class="snippet.type"
        v-for="(snippet, key) in filteredSnippets"
        :key="`${snippet.type}-${key}`"
        :is="snippet.type"
        :snippet="snippet"
        :style="{'grid-area': snippet.enlarge}"
      >
      </component>
    </div>
  </div>
</template>

<script>
import Highlight from '@/components/snippets/Highlight.vue'
import highlights from '@/data/highlights.json'
import WebArticle from '@/components/snippets/Article.vue'
import articles from '@/data/articles.json'
import { EventBus } from '@/eventbus'

const FILTERS = {
  articles: 'articles',
  highlights: 'highlights',
  valerie: 'valerie',
  blogposts: 'blogposts'
}

export default {
  name: 'SnippetsContainer',
  components: { Highlight, WebArticle },
  data () {
    return {
      snippets: [...articles, ...highlights, ...articles, ...highlights],
      filters: []
    }
  },
  created () {
    this.randomizedSnippets()

    EventBus.$on('filter', filters => {
      debugger
      if (filters.length === 0) {
        this.filters = [ FILTERS.articles, FILTERS.highlights, FILTERS.bolgposts, FILTERS.valerie ]
      } else {
        this.filters = filters
      }
    })
  },
  computed: {
    filteredSnippets () {
      if (this.filters.length === 0) {
        return this.snippets
      } else {
        const bla = this.snippets.filter((snippet) => {
          return this.filters.indexOf(snippet.type)
        })
        console.log(bla)
        return bla
      }
      
    },
    filteredSnippetsss () {
      return this.snippets.filter((snippet) => {
        return this.filters.indexOf(snippet.type)
      })
    }
  },
  methods: {
    filter (filter) {
      const filterIndex = this.filters.indexOf(filter)
      if (filterIndex !== -1) {
        this.filters.splice(filterIndex, 1)
      } else {
        this.filters.push(filter)
      }
    },
    randomizedSnippets () {
      let currentIndex = this.snippets.length
      let myRandomizedSnippets = this.snippets.slice(0)
      while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        let temporarySnippet = myRandomizedSnippets[currentIndex]
        myRandomizedSnippets[currentIndex] = myRandomizedSnippets[randomIndex]
        myRandomizedSnippets[randomIndex] = temporarySnippet
      }
      this.snippets = myRandomizedSnippets
    }
  }
}
</script>
