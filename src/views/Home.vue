<script lang="ts">
import { defineComponent, ref } from "vue";

import { getLatLon } from "@/composibles/getLatLon";
import router from "@/router";

export default defineComponent({
  name: "Home",
  setup() {
    const searchTerm = ref("");
    const getCoordinates = async () => {
      let searchTermArray = searchTerm.value.split(",");
      const { data, load } = getLatLon(
        searchTermArray[0],
        searchTermArray[1],
        searchTermArray[2]
      );
      await load();
      router.push(`/lat/${data.value?.coord.lat}/lon/${data.value?.coord.lon}`);
    };
    return { searchTerm, getCoordinates };
  },
});
</script>

<template>
  <div>
    <form @submit.prevent="getCoordinates">
      <input type="text" v-model="searchTerm" /><button type="submit">
        Search
      </button>
    </form>
  </div>
</template>
