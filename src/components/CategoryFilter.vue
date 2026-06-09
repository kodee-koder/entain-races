<template>
  <div class="flex gap-2 mb-4">
    <button
      v-for="c in categories"
      :key="c.id"
      @click="store.toggleCategory(c.id)"
      class="px-3 py-1 rounded-full border"
      :class="store.selectedCategories.includes(c.id)
        ? 'bg-blue-500 text-white'
        : 'bg-white'"
    >
      {{ c.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRacesStore } from '../stores/races'

const store = useRacesStore()

const categories = [
  { id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61', label: 'Greyhound' },
  { id: '161d9be2-e909-4326-8c2c-35ed71fb460b', label: 'Harness' },
  { id: '4a2788f8-e825-4d36-9894-efd4baf1cfae', label: 'Horse' },
]
</script>
<style scoped>
.category-filter {
  /* Styles */
}
</style>
