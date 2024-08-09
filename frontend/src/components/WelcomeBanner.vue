<template>
  <div class="flex flex-col">
    <div class="bg-[#0F1017] pb-[24px] px-[80px]">
      <Header />
      <div class="flex gap-8">
        <div class="flex-1 flex flex-col gap-8">
          <h1 class="text-[70px] font-semibold text-white leading-[84px]">
            Reliable, secure secret sharing service
          </h1>
          <p class="text-[#CFCFD1] text-[20px] font-normal">
            Hold incredible safety, share secrets, share with loved ones and
            professionals in the most secure way
          </p>
          <Button
            :label="'Create a Secret'"
            :width="'198px'"
            :height="'60px'"
            @clicked="$emit('scrollToSecretCreator')"
          />
        </div>
        <div class="flex-1 flex justify-end items-center">
          <img
            class="rounded-[45px] opacity-[90%]"
            :src="ImageHero"
            style="box-shadow: inset 0px 4px 4px 0px #00000040"
          />
        </div>
      </div>
      <div>
        <div class="flex gap-10 items-center my-4">
          <h2 class="text-[26px] font-bold text-white">Follow Us</h2>
          <div class="flex gap-8 items-center">
            <img
              class="w-[32.51px] h-[27.12px]"
              :src="LogoTwitter"
              alt="Twitter logo"
            />
            <img
              class="w-[16.92px] h-[30.42px]"
              :src="LogoFacebook"
              alt="Facebook logo"
            />
            <img
              class="w-[26.67px] h-[28px]"
              :src="LogoLinkedIn"
              alt="LinkedIn logo"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#27282E] flex flex-col py-6 items-center gap-8">
      <h1 class="text-[64px] font-semibold text-white">Our Partner</h1>
      <div class="flex gap-12">
        <img :src="LogoGoogle" />
        <img :src="LogoAirbnb" />
        <img :src="LogoUnicef" />
        <img :src="LogoAdobe" />
        <img :src="LogoMicrosoft" />
        <img :src="LogoShipbob" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoFacebook from "@/assets/facebook.svg";
import LogoTwitter from "@/assets/twitter.svg";
import LogoLinkedIn from "@/assets/linkedin.svg";
import LogoGoogle from "@/assets/google-logo.svg";
import LogoMicrosoft from "@/assets/microsoft-logo.svg";
import LogoAirbnb from "@/assets/airbnb-logo.svg";
import LogoUnicef from "@/assets/unicef-logo.svg";
import LogoAdobe from "@/assets/adobe-logo.svg";
import LogoShipbob from "@/assets/shipbob-logo.svg";
import ImageHero from "@/assets/hero.jpg";
import Button from "./Button.vue";
import Header from "@/components/Header.vue";

interface DataProps {
  LogoFacebook: string;
  LogoTwitter: string;
  LogoLinkedIn: string;
  LogoGoogle: string;
  LogoMicrosoft: string;
  LogoAirbnb: string;
  LogoUnicef: string;
  LogoAdobe: string;
  LogoShipbob: string;
  ImageHero: string;
}

export default defineComponent({
  name: "SecretCreator",
  components: {
    Header,
    Button,
  },
  data(): DataProps {
    return {
      LogoFacebook,
      LogoTwitter,
      LogoLinkedIn,
      LogoGoogle,
      LogoMicrosoft,
      LogoAirbnb,
      LogoUnicef,
      LogoAdobe,
      LogoShipbob,
      ImageHero,
    };
  },
});
</script>
