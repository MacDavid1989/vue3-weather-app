<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Search",
  setup() {
    const searchTerm = ref("");

    return { searchTerm };
  },
});
</script>

<template>
  <div>
    <form class="" @submit.prevent="$emit('searchTerm', searchTerm)">
      <input class="outline-none border-solid border border-gray-500" type="text" v-model="searchTerm" /><button class="w-24 border-solid border border-gray-500 bg-gray-400" type="submit">
        Search
      </button>
    </form>
  </div>
</template>
