import { Ref } from "vue";

// types
import { Forecast } from "../variable/Forecast";

export interface FormatForecast {
  forecast: Ref<Forecast[]>;
}
