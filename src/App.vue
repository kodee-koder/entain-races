<template>
  <div class="app-shell">
    <main class="app-main">
      <p class="brand-kicker">Entain Australia &amp; New Zealand</p>
      <h1 class="app-title">Next To Go Races</h1>
      <p class="app-subtitle">
        Live view of the next five races, sorted by start time with category filters.
      </p>

      <CategoryFilter />
      <RaceList />
    </main>
  </div>
</template>

<script setup lang="ts">
import CategoryFilter from './components/CategoryFilter.vue'
import RaceList from './components/RaceList.vue'
</script>