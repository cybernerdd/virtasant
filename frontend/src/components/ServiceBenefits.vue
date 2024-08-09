<template>
  <div class="h-[722px] bg-[#0F1017] flex justify-between items-center">
    <div class="relative flex-1 flex justify-center">
      <div class="relative">
        <img class="rounded-[16px]" :src="ImageWoman" />
        <img class="absolute top-8 right-6" :src="IconPin" alt="Pin icon" />
        <div
          class="absolute top-8 left-6 bg-[#FFFFFF4D] rounded-[300px] p-[8px_16px] flex gap-4"
        >
          <img :src="IconWoman" />
          <p class="text-white text-[18px]">Loving this secret sharing</p>
        </div>
        <div class="absolute top-24 left-80">
          <ModalSmall />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-8 w-[45%]">
      <p
        class="font-poppins text-base font-medium leading-7 tracking-widest text-left text-[#9F9FA2] flex items-center"
      >
        <span class="w-5 border-t border-[#9F9FA2] mr-2"></span>
        BENEFITS FOR YOU
      </p>

      <h1 class="font-semibold text-[44px] text-white">
        Fast, reliable and secure for your secrets
      </h1>
      <p class="text-[#CFCFD1] font-normal text-[16px]">
        By using us, get the benefits that make it easier for you in the secret
        sharing
      </p>
      <ul class="flex flex-col gap-4">
        <li class="flex gap-4 w-[250px]">
          <img :src="IconTickCircle" alt="Tick logo" />
          <span class="text-white">Encrypted Messages</span>
        </li>
        <li class="flex gap-4 w-[200px]">
          <img :src="IconTickCircle" alt="Tick logo" />
          <span class="text-white">Secure and Safe</span>
        </li>
        <li class="flex gap-4 w-[200px]">
          <img :src="IconTickCircle" alt="Tick logo" />
          <span class="text-white">A great way to send messages</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconPin from "@/assets/pin.svg";
import IconTickCircle from "@/assets/tick-circle.svg";
import IconWoman from "@/assets/woman-icon.png";
import ImageWoman from "@/assets/woman.png";
import ModalSmall from "@/components/ModalSmall.vue";

export default defineComponent({
  name: "ServiceBenefits",
  components: {
    ModalSmall,
  },
  data() {
    return {
      IconTickCircle,
      ImageWoman,
      IconPin,
      IconWoman,
    };
  },
});
</script>
