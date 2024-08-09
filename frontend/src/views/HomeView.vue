<template>
  <div class="font-poppins">
    <WelcomeBanner @scrollToSecretCreator="scrollToSecretCreator" />
    <div ref="secretCreator">
      <SecretCreator />
    </div>
    <ServiceBenefits />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WelcomeBanner from "@/components/WelcomeBanner.vue";
import SecretCreator from "@/components/SecretCreator.vue";
import ServiceBenefits from "@/components/ServiceBenefits.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    WelcomeBanner,
    SecretCreator,
    ServiceBenefits,
    Footer,
  },
  setup() {
    const secretCreator = ref<HTMLElement | null>(null);

    const scrollToSecretCreator = () => {
      if (secretCreator.value) {
        secretCreator.value.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      secretCreator,
      scrollToSecretCreator,
    };
  },
});
</script>
