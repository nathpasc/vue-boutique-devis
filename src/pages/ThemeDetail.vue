<template>
  <div v-if="theme" class="theme-detail">
    <h1 class="text-2xl font-bold mb-4">{{ theme.nom }}</h1>
    <img :src="theme.image" :alt="theme.nom" class="w-64 h-auto mb-4" width="45%"/>

    <h2 class="text-xl font-semibold mb-2">Choisissez une étiquette :</h2>
    <div class="mb-4">
  <h2 class="text-xl font-semibold mb-2">Type d'envoi :</h2>
  <label class="mr-4">
    <input type="radio" value="pdf" v-model="typeEnvoi" /> PDF
  </label>
  <label>
    <input type="radio" value="poste" v-model="typeEnvoi" /> Poste
  </label>
</div>
    
<div class="mb-4">
  <EtiquetteCard
    v-for="etiquette in etiquettesDisponibles"
        :key="etiquette.id"
        :etiquette="etiquette"
        v-model="etiquettesChoisies"
        :typeEnvoi="typeEnvoi"
  />
  

</div>
    <div v-if="etiquettesChoisies.length">
      <h3 class="text-lg font-medium">Prix total :</h3>
      <p>
        {{ prixTotal.toFixed(2) }} €
      </p>
    </div>
  </div>

  <div v-else>
    <p>Thème introuvable.</p>
  </div>
</template>

<script>
import {themes}  from '../data/themes.js'
import etiquettes from '../data/etiquettes.js'
import EtiquetteCard from '../components/EtiquetteCard.vue'


export default {
  data() {
    return {
      theme: null,
      etiquettesDisponibles: [],
      etiquettesChoisies: [],
      typeEnvoi: 'pdf',

    }
   
  },
  components: {
    EtiquetteCard
  },
  computed: {
    prixTotal() {
      return this.etiquettesChoisies.reduce((total, etiquette) => {
        return total + (this.typeEnvoi === 'pdf' ? etiquette.prix_pdf : etiquette.prix_poste)
      }, 0)
    }
  },
  mounted() {
    const id = parseInt(this.$route.params.id)
    this.theme = themes.find(t => t.id === id)

    if (this.theme) {
      this.etiquettesDisponibles = etiquettes.filter(e =>
        this.theme.etiquettes.includes(e.id)
      )
    }
  }
}
</script>
<style scoped>
.theme-detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: #51aadd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.theme-detail h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.theme-detail h2 {
  margin-top: 2rem;
  font-size: 1.3rem;
  color: #333;
}

.theme-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  border-radius: 12px;
}
</style>


