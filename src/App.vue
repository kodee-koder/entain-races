<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <h1 class="text-2xl font-bold mb-4">Next To Go Races</h1>

    <CategoryFilter />
    <RaceList />
    <CountdownTimer />
    <RaceCard />

  </div>
</template>

<script setup lang="ts">
import CategoryFilter from './components/CategoryFilter.vue'
import CountdownTimer from './components/CountdownTimer.vue'
import RaceCard from './components/RaceCard.vue';
import RaceList from './components/RaceList.vue'
</script>