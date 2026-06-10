<!-- AI Assistance: This file was developed with AI support and manually reviewed/edited. -->
<template>
  <section class="category-filter" aria-label="Race categories">
    <button
      v-for="c in categories"
      :key="c.id"
      @click="store.toggleCategory(c.id)"
      class="category-filter__button"
      :class="store.selectedCategories.includes(c.id)
        ? 'category-filter__button--active'
        : 'category-filter__button--inactive'"
    >
      {{ c.label }}
    </button>
  </section>
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
