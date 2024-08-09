<template>
  <div class="flex flex-col h-[100%] px-[80px]">
    <h1 class="text-[64px] font-semibold text-center mt-28">Create a Secret</h1>
    <div class="flex flex-col gap-8 mt-12">
      <div class="flex flex-col gap-4">
        <label class="text-[36px] font-semibold">Your Message</label>
        <div class="relative w-full bg-[#F6F6F6] p-[20px_30px]">
          <div class="absolute inset-0 p-[20px_30px] pointer-events-none">
            <span class="placeholder-text"></span>
          </div>
          <textarea
            class="placeholder-textarea bg-transparent outline-none w-full resize-none h-auto overflow-hidden"
            rows="3"
            placeholder=" "
            @input="updatePlaceholder"
            @focus="updatePlaceholder"
            v-model="secret"
          ></textarea>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <label class="text-[36px] font-semibold">Expire Time</label>
        <div class="relative">
          <select
            v-model="expireTime"
            class="w-full bg-[#F6F6F6] p-[20px_30px] text-[#57585d] custom-select"
          >
            <optgroup label="Keep in minutes">
              <option value="5m">5 mins</option>
              <option value="10m">10 mins</option>
              <option value="15m">15 mins</option>
            </optgroup>
            <optgroup label="Keep in hours">
              <option value="1h">1 hour</option>
              <option value="4h">4 hours</option>
              <option value="12h">12 hours</option>
            </optgroup>
            <optgroup label="Keep in days">
              <option value="1d">1 day</option>
              <option value="3d">3 days</option>
              <option value="7d">7 days</option>
            </optgroup>
          </select>
          <div class="select-arrow down arrow"></div>
        </div>
      </div>
    </div>

    <div class="flex justify-center my-20">
      <Button
        label="Generate"
        :showArrow="true"
        :showLoader="isLoading"
        fontWeight="700"
        width="272px"
        height="74px"
        @clicked="submitSecret"
      />
    </div>
    <Modal
      v-if="showModal"
      :message="url"
      :label="'Here is your URL'"
      :showCopyLink="true"
      @close="showModal = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Button from "./Button.vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "SecretCreator",
  components: {
    Button,
    Modal,
  },
  data() {
    return {
      secret: "",
      expireTime: "1h",
      url: "",
      isLoading: false,
      showModal: false,
      placeholder: "Enter your secret message",
    };
  },
  mounted() {
    this.updatePlaceholder();
  },
  methods: {
    submitSecret() {
      if (this.secret.length > 0) {
        this.isLoading = true;
        const payload = {
          secret: this.secret,
          expiresIn: this.expireTime,
        };
        const apiUrl =
          process.env.VUE_APP_API_URL + "/salt-message/save-secret";
        axios
          .post(apiUrl, payload)
          .then((response) => {
            this.url = response.data.data.url;
            this.showModal = true;
          })
          .catch((error) => {
            console.error("Error creating secret:", error);
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    updatePlaceholder(event?: Event): void {
      const textarea =
        (event?.target as HTMLTextAreaElement) ||
        this.$el.querySelector(".placeholder-textarea");
      const placeholderElement = this.$el.querySelector(".placeholder-text");
      const value = textarea.value;
      if (!value) {
        const boldText = "Enter ";
        const normalText = this.placeholder.slice(6);
        placeholderElement.innerHTML = `<span class="font-bold">${boldText}</span>${normalText}`;
      } else {
        placeholderElement.innerHTML = "";
      }
    },
  },
});
</script>

<style>
.secret-textarea::placeholder {
  color: transparent;
}
.placeholder-text {
  color: #57585d;
  font-size: 20px;
  white-space: pre-wrap;
}
.font-bold {
  font-weight: 700;
}
select {
  border: none;
  appearance: none;
  font-size: 20px;
  background: transparent;
  padding-right: 40px;
}

.arrow {
  border: solid #57585d;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.select-arrow {
  position: absolute;
  top: 40%;
  right: 26px;
  pointer-events: none;
}
</style>
