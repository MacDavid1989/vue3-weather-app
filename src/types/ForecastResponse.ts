import { Daily } from "./Daily";

export type ForecastResponse = {
  daily: Daily[];
} | null;
