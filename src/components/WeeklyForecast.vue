<script lang="ts">
import { defineComponent, PropType } from "vue";
import DailyForecast from "./DailyForecast.vue";

import { Forecast } from "@/types/Forecast";

export default defineComponent({
  name: "WeeklyForecast",
  props: {
    forecast: {
      required: true,
      type: Array as PropType<Forecast[]>,
    },
  },
  components: { DailyForecast },
});
</script>

<template>
  <div class="forecast" v-for="day in forecast" :key="day.day">
    <DailyForecast :day="day" />
  </div>
</template>
