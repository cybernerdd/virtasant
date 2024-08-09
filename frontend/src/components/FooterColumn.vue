<template>
  <div class="space-y-4">
    <label class="text-gray-900 font-semibold text-xl">{{ title }}</label>
    <ul class="space-y-4">
      <li v-for="link in links" :key="link" class="text-gray-500 text-base">
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterColumn",
  props: {
    title: {
      type: String,
      default: "",
    },
    links: {
      type: Array as () => string[],
      default: () => [],
    },
  },
});
</script>
