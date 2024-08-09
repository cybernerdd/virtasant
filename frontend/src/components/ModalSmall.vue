<template>
  <div class="bg-white rounded-2xl px-[20px] flex flex-col gap-2 py-2">
    <h1
      class="text-[#0F1017] font-semibold text-[17px] text-nowrap text-center"
    >
      Your Secret
    </h1>
    <hr />
    <div
      class="bg-[#172BE1] w-[216px] h-[125px] rounded-tr-lg rounded-b-lg p-2"
    >
      <span class="text-white text-[13px]">This is a secret</span>
    </div>
    <div
      class="border rounded-3xl border-[#CFCFD1] my-2 p-2 flex justify-between items-center"
    >
      <input
        class="w-[90%] border-none outline-none input-bar px-2 text-[13px]"
        placeholder="Enter Secret to Send"
      />
      <button class="bg-[#172BE1] p-2 rounded-full">
        <img :src="IconSend" alt="Send icon" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconSend from "@/assets/send.svg";

export default defineComponent({
  name: "ModalSmall",
  data() {
    return {
      IconSend,
    };
  },
});
</script>

<style>
.input-bar::placeholder {
  font-weight: 400;
  font-size: 13px;
}
</style>
