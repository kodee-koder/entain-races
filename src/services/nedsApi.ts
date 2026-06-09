import axios from "axios";

const BASE_URL = "https://api.neds.com.au/rest/v1/racing/";

export async function fetchNextRaces() {
  const res = await axios.get(BASE_URL, {
    params: {
      method: "nextraces",
    },
  });

  return res.data.data.race_summaries;
}
