import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import RaceCard from "./RaceCard.vue";
import type { Race } from "../types/race";

const makeRace = (category_id: string): Race => ({
  race_id: "race-1",
  race_name: "Test Race",
  race_number: 3,
  meeting_name: "Test Meeting",
  category_id,
  advertised_start: { seconds: 1_800_000_000 },
});

describe("RaceCard", () => {
  it("renders mapped category label for known category", () => {
    const wrapper = mount(RaceCard, {
      props: {
        race: makeRace("4a2788f8-e825-4d36-9894-efd4baf1cfae"),
      },
      global: {
        stubs: {
          CountdownTimer: true,
        },
      },
    });

    expect(wrapper.text()).toContain("Horse racing");
  });

  it("renders fallback label for unknown category", () => {
    const wrapper = mount(RaceCard, {
      props: {
        race: makeRace("unknown"),
      },
      global: {
        stubs: {
          CountdownTimer: true,
        },
      },
    });

    expect(wrapper.text()).toContain("Unknown category");
  });

  it("renders mapped category label for greyhound racing", () => {
    const wrapper = mount(RaceCard, {
      props: {
        race: makeRace("9daef0d7-bf3c-4f50-921d-8e818c60fe61"),
      },
      global: {
        stubs: {
          CountdownTimer: true,
        },
      },
    });

    expect(wrapper.text()).toContain("Greyhound racing");
  });

  it("renders meeting name and race number for race number zero", () => {
    const race = makeRace("4a2788f8-e825-4d36-9894-efd4baf1cfae");
    race.race_number = 0;
    race.meeting_name = "Edge Meeting";

    const wrapper = mount(RaceCard, {
      props: { race },
      global: {
        stubs: {
          CountdownTimer: true,
        },
      },
    });

    expect(wrapper.text()).toContain("Edge Meeting");
    expect(wrapper.text()).toContain("Race 0");
  });
});
