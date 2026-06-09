import { defineStore } from "pinia";
import { fetchNextRaces } from "../services/nedsApi";
import type { Race } from "../types/race";

const CATEGORY_FILTERS = [
  "9daef0d7-bf3c-4f50-921d-8e818c60fe61", // Greyhound
  "161d9be2-e909-4326-8c2c-35ed71fb460b", // Harness
  "4a2788f8-e825-4d36-9894-efd4baf1cfae", // Horse
];

export const useRacesStore = defineStore("races", {
  state: () => ({
    races: [] as Race[],
    selectedCategories: CATEGORY_FILTERS as string[],
    now: Date.now(),
  }),

  getters: {
    filteredRaces(state) {
      return state.races
        .filter((r) => state.selectedCategories.includes(r.category_id))
        .filter((r) => {
          const start = r.advertised_start.seconds * 1000;
          return start + 60_000 > state.now;
        })
        .sort((a, b) => a.advertised_start.seconds - b.advertised_start.seconds)
        .slice(0, 5);
    },
  },

  actions: {
    async loadRaces() {
      this.races = await fetchNextRaces();
    },

    toggleCategory(id: string) {
      if (this.selectedCategories.includes(id)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== id,
        );
      } else {
        this.selectedCategories.push(id);
      }
    },

    tick() {
      this.now = Date.now();
    },
  },
});
