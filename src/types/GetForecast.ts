import { Ref } from "vue";
import { Response } from "../types/Response";

export interface GetForecast {
  data: Ref<Response>;
  load: () => Promise<void>;
}
