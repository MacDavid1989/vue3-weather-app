import { ref, Ref } from "vue";
import router from "@/router";

// composibles
import { getCoordinates } from "@/composibles/methods/getCoordinates";

export const goToForecast = async (
  term: string
): Promise<{ error: Ref<string | undefined> }> => {
  const error = ref<string | undefined>("");

  const data = await getCoordinates(term);

  if (!data.value?.coord) {
    error.value = data.value?.message;
  } else {
    router.push(`/lat/${data.value?.coord.lat}/lon/${data.value?.coord.lon}`);
  }

  return { error };
};
