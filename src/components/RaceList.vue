<!-- AI Assistance: This file was developed with AI support and manually reviewed/edited. -->
<template>
  <section class="race-list" aria-live="polite">
    <RaceCard
      v-for="race in store.filteredRaces"
      :key="race.race_id"
      :race="race"
    />
    <p v-if="store.filteredRaces.length === 0" class="race-list__empty">
      No races match the selected categories right now.
    </p>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRacesStore } from '../stores/races'
import RaceCard from './RaceCard.vue'

const store = useRacesStore()
let tickInterval: ReturnType<typeof setInterval> | undefined
let refreshInterval: ReturnType<typeof setInterval> | undefined

onMounted(async () => {
  await store.loadRaces()

  // Update countdown once per second.
  tickInterval = setInterval(() => {
    store.tick()
  }, 1000)

  // Refresh upstream races periodically so filtered results stay populated.
  refreshInterval = setInterval(() => {
    void store.loadRaces()
  }, 15_000)
})

onUnmounted(() => {
  if (tickInterval) {
    clearInterval(tickInterval)
  }

  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>
