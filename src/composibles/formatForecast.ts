import { ref } from "vue";

// types
import { Forecast } from "../types/Forecast";
import { ForecastResponse } from "../types/ForecastResponse";
import { Daily } from "../types/Daily";
import { FormatForecast } from "../types/FormatForecast";

export const formatForecast = (data: ForecastResponse): FormatForecast => {
  const forecast = ref<Forecast[]>([]);

  data?.daily.map((day: Daily, index: number) => {
    if (index < 5) {
      forecast.value.push({
        day: new Date(day.dt * 1000).toLocaleDateString("en-us", {
          weekday: "short",
        }),
        min: Math.round(day.temp.min),
        max: Math.round(day.temp.max),
        description: day.weather[0].description,
        icon: day.weather[0].icon,
      });
    }
  });
  return { forecast };
};
