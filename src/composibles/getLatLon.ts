import { ref } from "vue";
import { LatLonResponse } from "@/types/LatLonResponse";
import { GetLatLon } from "@/types/GetLatLon";

export const getLatLon = (
  city: string,
  state?: string,
  country?: string
): GetLatLon => {
  const data = ref<LatLonResponse>(null);

  const load = async (): Promise<void> => {
    try {
      data.value = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}${
            state ? "," + state : ""
          }${
            country ? "," + country : ""
          }&appid=64aa619e2643a5c124b17c1a72923430`
        )
      ).json();
    } catch (err) {
      console.error(err);
    }
  };

  return { data, load };
};
