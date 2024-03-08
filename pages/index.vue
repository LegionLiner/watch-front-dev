<template>
  <div class="min-h-screen h-full relative">
    <div class="overflow-clip">
      <MainHero />
    </div>

    <div class="divider h-8 bg-primary w-full"></div>

    <div class="bg-gray-1 flex flex-col">
      <AppNotification />

      <MainCatalog />

      <MainBrands />

      <MainBanners />

      <MainParadigm />

      <MainNews />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainIntro from "~/components/MainIntro.vue";
import MainCatalog from "~/components/MainCatalog.vue";
import MainBanners from "~/components/MainBanners.vue";
import MainBrands from "~/components/MainBrands.vue";
import MainParadigm from "~/components/MainParadigm.vue";
import AppNotification from "~/components/AppNotification.vue";

definePageMeta({
  layout: "default",
});
</script>
