<template>
  <div>
    <h2>Nos Thèmes</h2>
    <div class="themes">
      <div v-for="theme in themes" :key="theme.id" class="theme-card">
        <router-link :to="'/theme/' + theme.id">
          <img :src="theme.image" :alt="theme.nom" />
          <h3>{{ theme.nom }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {themes} from '../data/themes.js'

export default {
  data() {
    return { themes }
  }
}
</script>

<style scoped>
.themes {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.theme-card {
  border: 1px solid #ddd;
  padding: 1rem;
  width: 150px;
  text-align: center;
}
.theme-card img {
  width: 100%;
  border-radius: 10px;
}
</style>
