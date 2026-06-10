/*
 * AI Assistance: This file was developed with AI support and manually reviewed/edited.
 */
import axios from "axios";
import type { Race } from "../types/race";

const BASE_URL = "https://api.neds.com.au/rest/v1/racing/";

type NextRacesResponse = {
  data?: {
    race_summaries?: Record<string, Race>;
  };
};

export async function fetchNextRaces(): Promise<Race[]> {
  const res = await axios.get<NextRacesResponse>(BASE_URL, {
    params: {
      method: "nextraces",
      // Neds endpoint requires count; a larger window helps keep 5 filtered races available.
      count: 50,
    },
  });

  return Object.values(res.data?.data?.race_summaries ?? {});
}
