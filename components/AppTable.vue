<template>
  <div class="flex flex-col gap-3 lg:gap-4 2xl:gap-6">
    <div
      class="text-secondary text-14px :text-[17px] font-medium xl:text-[18px] 2xl:text-[28px] !leading-[120%]"
    >
      Title Table
    </div>
    <div class="grid grid-cols-3">
      <!-- table header -->
      <div
        class="h-[34px] xl:h-[45px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-[12px] lg:text-[14px] text-gray-text !leading-[150%]"
      >
        Time
      </div>
      <div
        class="h-[34px] xl:h-[45px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-[12px] lg:text-[14px] text-gray-text !leading-[150%]"
      >
        % CHG
      </div>
      <div
        class="h-[34px] xl:h-[45px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-[12px] lg:text-[14px] text-gray-text !leading-[150%]"
      >
        AAGR
      </div>
      <!-- table body -->
      <!-- first -->
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] text-secondary !leading-[150%]"
      >
        1M
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-red"
      >
        +5.5%
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-red"
      >
        -51.1%
      </div>
      <!-- second -->
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] text-secondary !leading-[150%]"
      >
        3M
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +5.5%
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +37.5%
      </div>
      <!-- third -->
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] text-secondary !leading-[150%]"
      >
        6M
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +20.1%
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +56.6%
      </div>
      <!-- fourth -->
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] text-secondary !leading-[150%]"
      >
        1Y
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +67.9%
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +55%
      </div>
      <!-- fifth -->
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] text-secondary !leading-[150%]"
      >
        3Y
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +182.9%
      </div>
      <div
        class="h-[40px] xl:h-[50px] 2xl:h-[54px] py-2 px-3 lg:py-3 lg:px-4 border-[1px] border-gray-1 text-base xl:text-[17px] 2xl:text-[20px] !leading-[150%] text-green"
      >
        +38.7%
      </div>
      <!-- sixth -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
