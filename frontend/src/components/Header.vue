<template>
  <header class="flex justify-between items-center h-[130px]">
    <img
      class="w-[152px] h-[76px] border border-black object-cover"
      :src="Logo"
      alt="Company logo"
    />

    <ul class="flex gap-12">
      <li v-for="(link, index) in links" :key="index">
        <NavLink :label="link.label" :href="link.href" />
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/assets/header-logo.svg';
import NavLink from '@/components/NavLink.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    NavLink,
  },
  data() {
    return {
      Logo,
      links: [{ label: 'Home', href: '/' }],
    };
  },
});
</script>
