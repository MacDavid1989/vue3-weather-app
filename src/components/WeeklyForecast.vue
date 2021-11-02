<script lang="ts">
import { defineComponent, PropType } from "vue";

// components
import DailyForecast from "./DailyForecast.vue";

// composible
import { formatForecast } from "@/composibles/formatForecast";

// types
import { Response } from "../types/Response";

export default defineComponent({
  name: "WeeklyForecast",
  props: {
    data: {
      required: true,
      type: Object as PropType<Response>,
    },
  },
  components: { DailyForecast },
  setup(props) {
    const { forecast } = formatForecast(props.data);

    return { forecast };
  },
});
</script>

<template>
  <div class="weekly-forecast">
    <DailyForecast
      v-for="(day, index) in forecast"
      :key="day.day"
      :day="day"
      :index="index"
    />
  </div>
</template>

<style scoped>
.weekly-forecast {
  display: flex;
  width: fit-content;
  border: 1px solid #ddd;
}
</style>
