import { ref } from "vue";
import { ForecastResponse } from "@/types/ForecastResponse";
import { GetForecast } from "@/types/GetForecast";

export const getForecast = (lat: string, lon: string): GetForecast => {
  const data = ref<ForecastResponse>(null);

  const load = async (): Promise<void> => {
    try {
      data.value = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=64aa619e2643a5c124b17c1a72923430`
        )
      ).json();
    } catch (err) {
      console.error(err);
    }
  };

  return { data, load };
};
