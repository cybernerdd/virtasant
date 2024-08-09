<template>
  <a
    :class="isActive ? 'border-b-[2px] border-b-[#E14817]' : ''"
    class="text-[20px] text-white pb-3"
    :href="href"
  >
    {{ label }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLink",
  props: {
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive(): boolean {
      return this.href === window.location.pathname;
    },
  },
});
</script>
