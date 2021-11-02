<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Forecast } from "@/types/Forecast";

export default defineComponent({
  name: "DailyForecast",
  props: {
    day: {
      required: true,
      type: Object as PropType<Forecast>,
    },
  },
});
</script>

<template>
  <div class="day">
    <h1>{{ day.day }}</h1>
    <img
      :src="` http://openweathermap.org/img/wn/${day.icon}@2x.png`"
      :alt="day.description"
    />
    <span>{{ day.max }} / {{ day.min }}</span>
  </div>
</template>
