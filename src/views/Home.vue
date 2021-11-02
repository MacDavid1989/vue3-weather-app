<script lang="ts">
import { defineComponent, onMounted } from "vue";

// components
import WeeklyForecast from "@/components/WeeklyForecast.vue";

// composibles
import { getForecast } from "../composibles/getForecast";

export default defineComponent({
  name: "Home",
  components: { WeeklyForecast },
  setup() {
    const { data, load } = getForecast();

    onMounted(async () => await load());

    return { data };
  },
});
</script>

<template>
  <div class="home" v-if="data">
    <WeeklyForecast :data="data" />
  </div>
</template>
