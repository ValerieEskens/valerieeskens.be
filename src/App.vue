<template>
  <div id="app">
    <div id="background">
      <Header/>
    </div>
    <div id="content">
      <router-view/>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>
