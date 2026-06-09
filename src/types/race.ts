// Race types
export interface Race {
  race_id: string;
  race_name: string;
  race_number: number;
  meeting_name: string;
  category_id: string;
  advertised_start: {
    seconds: number;
  };
}
