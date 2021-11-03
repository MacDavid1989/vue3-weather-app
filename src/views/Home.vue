<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "@/router";

// components
import Search from "@/components/Form/Search.vue";

// composibles
import { getCoordinates } from "@/composibles/methods/getCoordinates";

export default defineComponent({
  name: "Home",
  components: { Search },
  setup() {
    const error = ref<string | undefined>("");

    const goToForecast = async (term: string) => {
      const data = await getCoordinates(term);
      if (!data.value?.coord) {
        error.value = data.value?.message;
      } else {
        router.push(
          `/lat/${data.value?.coord.lat}/lon/${data.value?.coord.lon}`
        );
      }
    };

    return { error, goToForecast };
  },
});
</script>

<template>
  <h1>Weather Seacrch</h1>
  <Search @searchTerm="goToForecast($event)" />
  <span v-if="error"
    ><p>{{ error }}</p></span
  >
</template>
