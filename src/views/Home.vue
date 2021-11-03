<script lang="ts">
import { defineComponent, ref } from "vue";

// components
import Search from "@/components/Form/Search.vue";

// composibles
import { goToForecast } from "@/composibles/methods/goToForecast";

export default defineComponent({
  name: "Home",
  components: { Search },
  setup() {
    const errorMessage = ref<string | undefined>("");

    const handleEvent = async (term: string) => {
      const { error } = await goToForecast(term);
      if (error.value) errorMessage.value = error.value;
    };
    
    return { errorMessage, handleEvent };
  },
});
</script>

<template>
  <h1>Weather Seacrch</h1>
  <Search @searchTerm="handleEvent($event)" />
  <span v-if="errorMessage"
    ><p>{{ errorMessage }}</p></span
  >
</template>
