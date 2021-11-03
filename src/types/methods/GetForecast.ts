import { Ref } from "vue";
import { ForecastResponse } from "../api/ForecastResponse";

export interface GetForecast {
  data: Ref<ForecastResponse>;
  load: () => Promise<void>;
}
