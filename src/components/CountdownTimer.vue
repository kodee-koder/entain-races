<template>
  <div class="font-mono text-sm">
    {{ timeLeft }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRacesStore } from '../stores/races'

const props = defineProps<{ startTime: number }>()

const store = useRacesStore()

const timeLeft = computed(() => {
  const diff = props.startTime * 1000 - store.now

  if (diff <= 0) return 'Starting'

  const mins = Math.floor(diff / 60000)
  const secs = Math.floor((diff % 60000) / 1000)

  return `${mins}m ${secs}s`
})
</script>

<style scoped>
.countdown-timer {
  /* Styles */
}
</style>
