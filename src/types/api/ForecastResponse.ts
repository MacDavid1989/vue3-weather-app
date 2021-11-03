import { Daily } from "../variable/Daily";

export type ForecastResponse = {
  daily: Daily[];
} | null;
