<template>
  <div class="grid gap-3">
    <RaceCard
      v-for="race in store.filteredRaces"
      :key="race.race_id"
      :race="race"
    />
  </div>
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

  tickInterval = setInterval(() => {
    store.tick()
  }, 1000)

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
