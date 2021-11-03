import { Ref } from "vue";

// composibles
import { getLatLon } from "@/composibles/api/getLatLon";

// types
import { LatLonResponse } from "@/types/api/LatLonResponse";

export const getCoordinates = async (
  term: string
): Promise<Ref<LatLonResponse>> => {
  const searchTermArray: string[] = term.split(",");

  const { data, load } = getLatLon(
    searchTermArray[0],
    searchTermArray[1],
    searchTermArray[2]
  );

  await load();

  return data;
};
