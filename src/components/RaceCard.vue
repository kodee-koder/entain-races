<template>
  <div class="p-4 bg-white rounded shadow flex justify-between">
    <div>
      <div class="font-semibold">{{ race.meeting_name }}</div>
      <div class="text-sm text-gray-500">Race {{ race.race_number }}</div>
    </div>

    <CountdownTimer :startTime="race.advertised_start.seconds" />
  </div>
</template>

<script setup lang="ts">
import CountdownTimer from './CountdownTimer.vue'

defineProps<{ race: any }>()
</script>

<style scoped>
.race-card {
  /* Styles */
}
</style>
