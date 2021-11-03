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
    <form @submit.prevent="() => $emit('searchTerm', searchTerm)">
      <input type="text" v-model="searchTerm" /><button type="submit">
        Search
      </button>
    </form>
  </div>
</template>
