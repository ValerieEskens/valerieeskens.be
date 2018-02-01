<template>
  <div>
    <nav>
      <NavItem
        v-for="(type, key) in types"
        :key="key"
        :type="type"
        @click="filterOn(type)"
        :active="filteredOn(type)"
      />
    </nav>

    <div class="snippets">
      <Article
        v-show="filteredOn(types.ARTICLES) || !filterActivated"
        class="snippet"
        v-for="(article, key) in articles"
        :key="key+10"
        :image="article.image"
        :source="article.source"
        :author="article.author"
        :style="{ order: randomOrder() }"
      />
      <Highlight
        v-show="filteredOn(types.HIGHLIGHTS) || !filterActivated"
        class="snippet"
        v-for="(highlight, key) in highlights"
        :key="key"
        :highlight="highlight.highlight"
        :source="highlight.source"
        :author="highlight.author"
        :style="{ order: randomOrder() }"
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
      filter: ''
    }
  },
  created () {
  },
  computed: {
    totalSnippets() {
      return articles.length + highlights.length
    },
    filterActivated () {
      return this.filter !== ''
    }
  },
  methods: {
    randomOrder () {
      return Math.floor(Math.random() * this.totalSnippets + 1)
    },
    filteredOn (type) {
      return this.filter === type
    },
    filterOn (type) {
      if (this.filteredOn(type)) {
        this.filter = ''
      } else {
        this.filter = type
      }
    }
  }
}
</script>
