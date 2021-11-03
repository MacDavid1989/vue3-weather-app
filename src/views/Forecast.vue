<script lang="ts">
import { defineComponent, onMounted } from "vue";

// components
import WeeklyForecast from "@/components/Forecast/WeeklyForecast.vue";

// composibles
import { getForecast } from "../composibles/api/getForecast";

export default defineComponent({
  name: "Forecast",
  props: ["lat", "lon"],
  components: { WeeklyForecast },
  setup(props) {
    const { data, load } = getForecast(props.lat, props.lon);

    onMounted(async () => await load());

    return { data };
  },
});
</script>

<template>
  <div class="forecast" v-if="data">
    <WeeklyForecast :data="data" />
  </div>
</template>
