import { Ref } from "vue";
import { LatLonResponse } from "../types/LatLonResponse";

export interface GetLatLon {
  data: Ref<LatLonResponse>;
  load: () => Promise<void>;
}
