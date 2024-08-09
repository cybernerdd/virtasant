<template>
  <button
    @click="$emit('clicked')"
    :style="{
      fontWeight: fontWeight,
      width: width,
      height: height,
      backgroundColor: showLoader ? '#A0A0A0' : '#1743E1',
    }"
    class="cursor-pointer h-[74px] text-white text-nowrap p-[10px_24px] text-[20px] rounded-lg flex justify-center items-center gap-2"
    :disabled="showLoader"
  >
    <span v-if="!showLoader">{{ label }}</span>
    <img
      v-if="!showLoader && showArrow"
      :src="IconArrowRight"
      alt="Icon arrow"
    />
    <span v-if="showLoader" class="loader"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconArrowRight from "@/assets/arrow-right-white.svg";

export default defineComponent({
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    fontWeight: {
      type: String,
      default: "500",
    },
    showLoader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      IconArrowRight,
    };
  },
});
</script>

<style scoped>
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
