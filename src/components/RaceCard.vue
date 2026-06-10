<!-- AI Assistance: This file was developed with AI support and manually reviewed/edited. -->
<template>
  <article class="race-card">
    <div class="race-card__meta">
      <p class="race-card__meeting">{{ race.meeting_name }}</p>
      <p class="race-card__number">Race {{ race.race_number }}</p>
      <p class="race-card__category">{{ categoryLabel }}</p>
    </div>

    <CountdownTimer class="race-card__timer" :startTime="race.advertised_start.seconds" />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CountdownTimer from './CountdownTimer.vue'
import type { Race } from '../types/race'

const props = defineProps<{ race: Race }>()

// API provides category_id only, so map IDs to user-facing labels.
const categoryMap: Record<string, string> = {
  '9daef0d7-bf3c-4f50-921d-8e818c60fe61': 'Greyhound racing',
  '161d9be2-e909-4326-8c2c-35ed71fb460b': 'Harness racing',
  '4a2788f8-e825-4d36-9894-efd4baf1cfae': 'Horse racing',
}

const categoryLabel = computed(() => {
  return categoryMap[props.race.category_id] ?? 'Unknown category'
})
</script>

