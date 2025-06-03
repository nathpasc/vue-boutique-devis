<template>
  <div class="etiquette-card">
  <label>
      <input
        type="checkbox"
        :value="etiquette"
        :checked="modelValue.includes(etiquette)"
        @change="toggleSelection"
      />
      <strong>{{ etiquette.nom }}</strong><br />
Prix :
{{ typeEnvoi === 'pdf'
    ? etiquette.prix_pdf.toFixed(2)
    : etiquette.prix_poste.toFixed(2)
}} €


    </label>
  </div>
</template>

<script>
export default {
  name: 'EtiquetteCard',
  props: {
    etiquette: Object,
    modelValue: Array,
    typeEnvoi: {
      type: String,
      required: true
    },
  },

 methods: {
  toggleSelection() {
    const isSelected = this.modelValue.includes(this.etiquette)
    const updated = isSelected
      ? this.modelValue.filter(e => e.id !== this.etiquette.id)
      : [...this.modelValue, this.etiquette]
    this.$emit('update:modelValue', updated)
  }
}

}
</script>


<style scoped>
.etiquette-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 0.5rem 0;
  transition: 0.2s ease;
}
.etiquette-card:hover {
  background-color: #f9f9f9;
  cursor: pointer;
}
</style>

 
