<template>
  <div class="snippets">
    <Article
      class="snippet"
      v-for="(article, key) in articles"
      :key="key+10"
      :image="article.image"
      :source="article.source"
      :author="article.author"
    />

    <Highlight
      class="snippet"
      v-for="(highlight, key) in highlights"
      :key="key"
      :content="highlight.highlight"
      :source="highlight.source"
      :author="highlight.author"
    />
  </div>
</template>

<script>
import Highlight from '@/components/snippets/Highlight.vue'
import highlights from '@/data/highlights.json'
import Article from '@/components/snippets/Article.vue'
import articles from '@/data/articles.json'

export default {
  name: 'SnippetsContainer',
  components: { Highlight, Article },
  data () {
    return {
      highlights: highlights,
      articles: articles
    }
  }
}
</script>
