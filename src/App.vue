<template>
  <div id="app">
    <div id="background">
      <Header/>
      <Nav/>
    </div>
    <div id="content">
      <router-view/>
      </div>
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
