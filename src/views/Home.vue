<template>
  <div class="home" v-for="day in forecast" :key="day.dt">
    <h1>{{ day.dt }}</h1>
    <p>{{ day.weather[0].description }}</p>
    <span>{{ day.temp.max }} - {{ day.temp.min }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Forecast {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}
export default defineComponent({
  name: "Home",
  setup() {
    const forecast = ref<Forecast[]>([]);

    // "api.openweathermap.org/data/2.5/weather?q=toronto,on,ca&appid=64aa619e2643a5c124b17c1a72923430"

    const load = async () => {
      try {
        let data = await (
          await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lon=-79.4163&lat=43.7001&units=metric&exclude=minutely,hourly,alerts&appid=64aa619e2643a5c124b17c1a72923430"
          )
        ).json();

        data.daily.map((day: Forecast, index: number) => {
          if (index < 5) forecast.value.push(day);
        });
      } catch (err) {
        console.error(err);
      }
    };

    load();

    return { forecast };
  },
});
</script>
