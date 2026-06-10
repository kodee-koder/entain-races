import { beforeEach, describe, expect, it, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useRacesStore } from "./races";
import type { Race } from "../types/race";

const makeRace = (
  race_id: string,
  seconds: number,
  category_id: string,
): Race => ({
  race_id,
  race_name: `Race ${race_id}`,
  race_number: Number(race_id.replace("r", "")) || 1,
  meeting_name: `Meeting ${race_id}`,
  category_id,
  advertised_start: { seconds },
});

vi.mock("../services/nedsApi", () => ({
  fetchNextRaces: vi.fn(async () => []),
}));

describe("races store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("filters by selected categories, removes races > 1 min past start, sorts and limits to 5", () => {
    const store = useRacesStore();

    const nowMs = 1_700_000_000_000;
    store.now = nowMs;

    const horse = "4a2788f8-e825-4d36-9894-efd4baf1cfae";
    const harness = "161d9be2-e909-4326-8c2c-35ed71fb460b";
    const greyhound = "9daef0d7-bf3c-4f50-921d-8e818c60fe61";

    const nowSec = Math.floor(nowMs / 1000);

    store.races = [
      makeRace("r1", nowSec + 200, horse),
      makeRace("r2", nowSec + 100, horse),
      makeRace("r3", nowSec + 300, harness),
      makeRace("r4", nowSec + 400, greyhound),
      makeRace("r5", nowSec + 500, horse),
      makeRace("r6", nowSec + 600, horse),
      makeRace("r7", nowSec - 61, horse), // should be removed (more than 1 min late)
      makeRace("r8", nowSec + 50, "other-category"), // should be removed (not selected)
    ];

    const result = store.filteredRaces;

    expect(result).toHaveLength(5);
    expect(result.map((r) => r.race_id)).toEqual(["r2", "r1", "r3", "r4", "r5"]);
  });

  it("toggles category filters", () => {
    const store = useRacesStore();
    const horse = "4a2788f8-e825-4d36-9894-efd4baf1cfae";

    expect(store.selectedCategories).toContain(horse);

    store.toggleCategory(horse);
    expect(store.selectedCategories).not.toContain(horse);

    store.toggleCategory(horse);
    expect(store.selectedCategories).toContain(horse);
  });

  it("excludes a race exactly 60 seconds after advertised start", () => {
    const store = useRacesStore();
    const horse = "4a2788f8-e825-4d36-9894-efd4baf1cfae";

    const nowMs = 1_700_000_000_000;
    const nowSec = Math.floor(nowMs / 1000);
    store.now = nowMs;

    store.races = [
      makeRace("boundary", nowSec - 60, horse),
      makeRace("future", nowSec + 1, horse),
    ];

    expect(store.filteredRaces.map((r) => r.race_id)).toEqual(["future"]);
  });

  it("returns no races when no categories are selected", () => {
    const store = useRacesStore();
    const horse = "4a2788f8-e825-4d36-9894-efd4baf1cfae";

    const nowMs = 1_700_000_000_000;
    const nowSec = Math.floor(nowMs / 1000);
    store.now = nowMs;
    store.selectedCategories = [];

    store.races = [makeRace("r1", nowSec + 30, horse)];

    expect(store.filteredRaces).toEqual([]);
  });

  it("can toggle an unknown category id", () => {
    const store = useRacesStore();
    const custom = "custom-category";

    expect(store.selectedCategories).not.toContain(custom);

    store.toggleCategory(custom);
    expect(store.selectedCategories).toContain(custom);

    store.toggleCategory(custom);
    expect(store.selectedCategories).not.toContain(custom);
  });
});
