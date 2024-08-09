<template>
  <div class="w-72 flex flex-col gap-4">
    <h2 class="text-gray-900 font-semibold text-xl">
      Subscribe to our newsletter.
    </h2>
    <p class="text-gray-500 text-base">
      Want to stay up to date with news and updates about our product?
      Subscribe.
    </p>
    <button
      class="border border-gray-300 rounded-lg p-4 w-full text-gray-500 text-sm font-light flex justify-center items-center gap-10"
    >
      contactus@urbahhood.org
      <img :src="IconArrowRight" alt="Icon arrow right" />
    </button>
    <p class="text-gray-400 text-xs leading-3">
      By subscribing to our newsletter you agree to our privacy policy and will
      get commercial communication.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconArrowRight from "@/assets/arrow-right-black.svg";

export default defineComponent({
  name: "FooterNewsLetter",
  data() {
    return {
      IconArrowRight,
    };
  },
});
</script>
