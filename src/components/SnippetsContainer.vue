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

      <Snippet
        v-for="(snippet, key) in filteredSnippets"
        :key="key"
        :image="snippet.image"
        :source="snippet.source"
        :author="snippet.author"
        :content="snippet.content"
        :style="{ order: randomOrder() }"
      />
    </div>
  </div>
</template>

<script>
import highlights from '@/data/highlights.json'
import articles from '@/data/articles.json'

import Snippet from '@/components/snippet.vue'
import NavItem from '@/components/NavItem'

export default {
  name: 'SnippetsContainer',
  components: { NavItem, Snippet },
  data () {
    return {
      snippets: [...articles, ...highlights],
      types: {
        ARTICLE: 'article',
        HIGHLIGHTS: 'highlight',
        VALERIE: 'valerie',
        BLOGPOST: 'blogpost'
      },
      filter: ''
    }
  },
  created () {
  },
  computed: {
    totalSnippets () {
      return articles.length + highlights.length
    },
    filterActivated () {
      return this.filter !== ''
    },
    filteredSnippets () {
      if (this.filter === '') {
        return this.snippets;
      }
      return this.snippets.filter((snippet) => {
        return snippet.type === this.filter;
      });
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
