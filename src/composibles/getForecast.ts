import { ref } from "vue";
import { Response } from "../types/Response";

export const getForecast = () => {
  const data = ref<Response>({ daily: [] });

  const load = async () => {
    try {
      const response = await (
        await fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lon=-79.4163&lat=43.7001&units=metric&exclude=minutely,hourly,alerts&appid=64aa619e2643a5c124b17c1a72923430"
        )
      ).json();

      data.value = response;
    } catch (err) {
      console.error(err);
    }
  };

  return { data, load };
};
