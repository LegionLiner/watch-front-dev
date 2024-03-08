<template>
  <div class="bg-gray-1 h-screen py-10 flex flex-col items-center">
    <HeaderLogo
      class="text-secondary hover:text-primary transition-colors w-[115px] lg:w-fit h-9 xl:h-8 2xl:h-10 duration-300 cursor-pointer"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from "~/components/header/HeaderLogo.vue";
</script>

<style scoped></style>
