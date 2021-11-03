import { Ref } from "vue";
import { ForecastResponse } from "./ForecastResponse";

export interface GetForecast {
  data: Ref<ForecastResponse>;
  load: () => Promise<void>;
}
