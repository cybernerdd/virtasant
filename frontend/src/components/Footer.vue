<template>
  <footer class="px-20">
    <div class="flex justify-between items-start py-12">
      <img :src="LogoCompany" alt="Company logo" />
      <div class="flex gap-16">
        <FooterColumn title="Company" :links="companyLinks" />
        <FooterColumn title="Support" :links="supportLinks" />
      </div>
      <FooterNewsLetter />
    </div>
    <hr />
    <div class="py-12 flex justify-center items-center">
      <ul class="flex justify-center gap-16">
        <li class="text-gray-500 text-base">2022, EventUp, Inc</li>
        <div class="flex gap-4">
          <li class="text-gray-500 text-base">Privacy Policy</li>
          <li class="text-gray-500 text-base">Terms of Service</li>
          <li class="text-gray-500 text-base">Cookie Settings</li>
        </div>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoCompany from "@/assets/footer-logo.svg";
import FooterColumn from "@/components/FooterColumn.vue";
import FooterNewsLetter from "@/components/FooterNewsLetter.vue";

export default defineComponent({
  name: "Footer",
  components: {
    FooterColumn,
    FooterNewsLetter,
  },
  data() {
    return {
      LogoCompany,
      companyLinks: ["About", "Contact", "Blog"] as string[],
      supportLinks: ["Contact Us", "Support Policy"] as string[],
    };
  },
});
</script>
