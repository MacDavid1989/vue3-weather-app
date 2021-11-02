<template>
  <div class="home">
    <h1>{{ forecast }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Forecast {
  daily: [];
}

export default defineComponent({
  name: "Home",
  setup() {
    const forecast = ref<Forecast[]>([]);

    // "api.openweathermap.org/data/2.5/weather?q=toronto,on,ca&appid=64aa619e2643a5c124b17c1a72923430"

    const load = async () => {
      try {
        let data = await fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lon=-79.4163&lat=43.7001&units=metric&exclude=minutely,hourly,alerts&appid=64aa619e2643a5c124b17c1a72923430"
        );

        forecast.value = await data.json();
      } catch (err) {
        console.error(err);
      }
    };

    load();

    return { forecast };
  },
});
</script>
