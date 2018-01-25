<template>
  <div class="snippets">
    <Highlight
      class="snippet"
      v-for="(highlight, key) in highlights"
      :key="key+10"
      :content="highlight.highlight"
      :source="highlight.source"
      :author="highlight.author"
    />
  </div>
</template>

<script>
import Highlight from '@/components/snippets/Highlight.vue'
import highlights from '@/data/highlights.json'

export default {
  name: 'SnippetsContainer',
  components: { Highlight },
  data () {
    return {
      highlights: highlights
    }
  }
}
</script>
