<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    @click.self="closeModal"
  >
    <div
      class="bg-white p-5 rounded-lg relative w-[50%] mx-4 px-12 max-h-[80%] overflow-auto"
    >
      <span
        class="absolute top-2 right-2 cursor-pointer text-2xl"
        @click="closeModal"
        >&times;</span
      >
      <h2 class="text-[#172BE1] font-semibold text-[32px] text-center mb-6">
        {{ label }}
      </h2>
      <div class="bg-[#172BE1] rounded-xl p-[10px_24px]">
        <p class="text-white text-[22px] word-wrap break-words">
          {{ message }}
        </p>
      </div>
      <div v-if="showCopyLink" class="flex justify-end my-5">
        <Button
          :label="'Copy URL'"
          :width="'140px'"
          :height="'60px'"
          @clicked="copyUrlToClipboard"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Modal",
  components: {
    Button,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    showCopyLink: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    copyUrlToClipboard() {
      navigator.clipboard.writeText(this.message).then(
        () => {
          alert("URL copied to clipboard!");
        },
        (err) => {
          console.error("Failed to copy: ", err);
        }
      );
    },
  },
});
</script>

<style scoped>
.break-words {
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
}

.overflow-auto {
  overflow: auto;
}
</style>
