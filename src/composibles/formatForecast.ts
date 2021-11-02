import { ref } from "vue";

// types
import { Forecast } from "../types/Forecast";
import { Response } from "../types/Response";
import { Daily } from "../types/Daily";
import { FormatForecast } from "../types/FormatForecast";

export const formatForecast = (data: Response): FormatForecast => {
  const forecast = ref<Forecast[]>([]);

  data?.daily.map((day: Daily, index: number) => {
    if (index < 5) {
      forecast.value.push({
        day: new Date(day.dt * 1000).toLocaleDateString("en-us", {
          weekday: "short",
        }),
        min: Math.floor(day.temp.min),
        max: Math.floor(day.temp.max),
        description: day.weather[0].description,
        icon: day.weather[0].icon,
      });
    }
  });
  return { forecast };
};
