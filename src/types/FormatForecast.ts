import { Ref } from "vue";

// types
import { Forecast } from "../types/Forecast";

export interface FormatForecast {
  forecast: Ref<Forecast[]>;
}
