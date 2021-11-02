<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

// types
import { Forecast } from "../types/Forecast";
import { Daily } from "../types/Daily";

// composibles
import { getForecast } from "../composibles/getForecast";

// components
import WeeklyForecast from "@/components/WeeklyForecast.vue";

export default defineComponent({
  name: "Home",
  components: { WeeklyForecast },
  setup() {
    const forecast = ref<Forecast[]>([]);

    // "api.openweathermap.org/data/2.5/weather?q=toronto,on,ca&appid=64aa619e2643a5c124b17c1a72923430"

    const { data, load } = getForecast();

    onMounted(async () => {
      await load();
      data.value?.daily?.map((day: Daily, index: number) => {
        if (index < 5) {
          forecast.value.push({
            day: new Date(day.dt * 1000).toLocaleDateString("en-us", {
              weekday: "short",
            }),
            min: Math.floor(day.temp.min),
            max: Math.floor(day.temp.max),
            description: day.weather[0].description,
            icon: day.weather[0].icon,
          });
        }
      });
    });

    return { forecast };
  },
});
</script>

<template>
  <div class="home" v-if="forecast.length">
    <WeeklyForecast :forecast="forecast" />
  </div>
</template>
