<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "@/router";

// components
import Search from "@/components/Search.vue";

// composibles
import { getLatLon } from "@/composibles/getLatLon";

export default defineComponent({
  name: "Home",
  components: { Search },
  setup() {
    const getCoordinates = async (term: string) => {
      let searchTermArray = term.split(",");
      const { data, load } = getLatLon(
        searchTermArray[0],
        searchTermArray[1],
        searchTermArray[2]
      );
      await load();
      router.push(`/lat/${data.value?.coord.lat}/lon/${data.value?.coord.lon}`);
    };
    return { getCoordinates };
  },
});
</script>

<template>
  <Search @searchTerm="getCoordinates($event.searchTerm)" />
</template>
