<template>
  <div id="app">
    <Header/>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: { Header, Nav }
}
</script>
