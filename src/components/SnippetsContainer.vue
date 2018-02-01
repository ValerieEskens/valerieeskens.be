<template>
  <div>
    <nav>
      <NavItem
        v-for="(type, key) in types"
        :key="key"
        :type="type"
        @click="filter(type)"
        :active="filteredOn(type)"
      />
    </nav>

    <div class="snippets">
      <Article
        v-show="filteredOn(types.ARTICLES) || !filtersActivated"
        class="snippet"
        v-for="(article, key) in articles"
        :key="key+10"
        :image="article.image"
        :source="article.source"
        :author="article.author"
      />
      <Highlight
        v-show="filteredOn(types.HIGHLIGHTS) || !filtersActivated"
        class="snippet"
        v-for="(highlight, key) in highlights"
        :key="key"
        :content="highlight.highlight"
        :source="highlight.source"
        :author="highlight.author"
      />
    </div>
  </div>
</template>

<script>
import Highlight from '@/components/snippets/Highlight.vue'
import highlights from '@/data/highlights.json'
import Article from '@/components/snippets/Article.vue'
import articles from '@/data/articles.json'
import NavItem from '@/components/NavItem'

export default {
  name: 'SnippetsContainer',
  components: { Highlight, Article, NavItem },
  data () {
    return {
      articles: [...articles, ...articles],
      highlights: [...highlights, ...highlights],
      types: {
        ARTICLES: 'articles',
        HIGHLIGHTS: 'highlights',
        VALERIE: 'valerie',
        BLOGPOST: 'blogposts'
      },
      filters: ['articles']
    }
  },
  created () {
    this.randomizedSnippets()
  },
  computed: {
    filtersActivated () {
      return this.filters.length !== 0
    }
  },
  methods: {
    filteredOn (type) {
      return this.filters.indexOf(type) !== -1
    },
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
