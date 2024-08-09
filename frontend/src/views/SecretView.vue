<template>
  <div>
    <div class="bg-[#0F1017] pb-[24px] px-[80px] h-screen flex items-center">
      <div class="flex gap-8">
        <div class="flex-1 flex flex-col gap-8">
          <h1 class="text-[70px] font-semibold text-white leading-[84px]">
            Reliable, secure secret sharing service
          </h1>
          <p v-if="validSecret" class="text-[#CFCFD1] text-[20px] font-normal">
            Looks like someone gave you this url
          </p>
          <p v-else class="text-[#CFCFD1] text-[20px] font-normal">
            Link has expired or did not really existed in the first place
          </p>
          <Button
            v-if="validSecret"
            :label="'Reveal the Secret Now'"
            :width="'228px'"
            :height="'60px'"
            @clicked="openModal"
          />
          <Button
            v-else
            :label="'Return to home'"
            :width="'228px'"
            :height="'60px'"
            @clicked="returnHome"
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
    </div>
    <Footer />
    <Modal
      v-if="showModal"
      :message="message"
      :label="'Your Secret'"
      @close="showModal = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import ImageHero from "@/assets/hero.jpg";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "SecretView",
  components: {
    Button,
    Footer,
    Modal,
  },
  props: {
    token: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ImageHero,
      validSecret: false,
      message: "",
      showModal: false,
    };
  },
  methods: {
    fetchSecret() {
      const apiUrl =
        process.env.VUE_APP_API_URL + `/salt-message/get-secret/${this.token}`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.validSecret = response.data.status;
          this.message = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching secret:", error);
          this.message = "Failed to fetch secret. Please try again later.";
        });
    },
    openModal() {
      this.showModal = true;
    },
    returnHome() {
      this.$router.push("/");
    },
  },
  created() {
    this.fetchSecret();
  },
});
</script>
