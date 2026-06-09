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
      count: 50,
    },
  });

  return Object.values(res.data?.data?.race_summaries ?? {});
}
