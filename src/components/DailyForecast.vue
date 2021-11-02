<script lang="ts">
import { defineComponent, PropType } from "vue";

// types
import { Forecast } from "@/types/Forecast";

export default defineComponent({
  name: "DailyForecast",
  props: {
    day: {
      required: true,
      type: Object as PropType<Forecast>,
    },
    index: Number,
  },
});
</script>

<template>
  <div :class="{ 'daily-forecast': true, 'daily-forecast--current': !index }">
    <h1 class="daily-forecast__heading">{{ day.day }}</h1>
    <img
      class="daily-forecast__icon"
      :src="` http://openweathermap.org/img/wn/${day.icon}@2x.png`"
      :alt="day.description"
    />
    <span class="daily-forecast__temp">
      <p class="daily-forecast__temp--high">{{ day.max }}&#176;</p>
      <p class="daily-forecast__temp--low">{{ day.min }}&#176;</p>
    </span>
  </div>
</template>

<style scoped>
.daily-forecast,
.daily-forecast--current {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  width: 13.5rem;
  height: 17.5rem;
}
.daily-forecast--current {
  background: #ddd;
}
.daily-forecast__heading {
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  color: #888;
}
.daily-forecast__icon {
  width: 10rem;
}
.daily-forecast__temp {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.daily-forecast__temp--high,
.daily-forecast__temp--low {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: #444;
}
.daily-forecast__temp--low {
  color: #888;
}
</style>
