<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

// components
import Search from "@/components/Search.vue";

// composibles
import { getCoordinates } from "@/composibles/getCoordinates";

export default defineComponent({
  name: "Home",
  components: { Search },
  setup() {
    const goToForecast = async (term: string) => {
      const data = await getCoordinates(term);
      if (!data.value?.coord) {
        router.push(`/NotFound`);
      } else {
        router.push(
          `/lat/${data.value?.coord.lat}/lon/${data.value?.coord.lon}`
        );
      }
    };

    return { goToForecast };
  },
});
</script>

<template>
  <Search @searchTerm="goToForecast($event)" />
</template>
