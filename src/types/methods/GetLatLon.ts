import { Ref } from "vue";
import { LatLonResponse } from "../api/LatLonResponse";

export interface GetLatLon {
  data: Ref<LatLonResponse>;
  load: () => Promise<void>;
}
