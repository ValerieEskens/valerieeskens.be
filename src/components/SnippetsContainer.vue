<template>
  <div class="snippets">
    <Highlight
      class="snippet"
      :style="{ 'box-shadow': `2px 2px 3px 1px ${highlight.color}, inset 0 0 5px 1px ${highlight.color}` }"
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
      highlights: highlights,
      colors: ['#F4BE75', '#CC787F', '#A36E81', '#655C77', '#4A5B78']
    }
  },
  created () {
    this.highlights.forEach(highlight => {
      highlight.color = this.getColor();
    });
  },
  methods: {
    getColor () {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    },

  }
}
</script>
