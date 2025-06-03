<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>
<style>
body {
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
}
</style>
