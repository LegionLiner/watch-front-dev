<template>
  <div class="flex gap-10 flex-col flex-1 w-full">
    <div>
      <ul class="flex gap-6 items-center">
        <li
          v-for="tab in tabs"
          class="flex flex-col relative transition-colors cursor-pointer"
          :class="{
            'text-primary cursor-default': currentTab.id === tab.id,
          }"
          @click="selectTab(tab)"
        >
          <div class="flex items-center gap-2 font-medium">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M5.13593 17.1832L5.07919 17.1831C3.93111 17.1831 3 16.252 3 15.104V12.5918"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.97014 17.1823C8.97014 16.1237 8.112 15.2656 7.05343 15.2656C5.99486 15.2656 5.13672 16.1237 5.13672 17.1823C5.13672 18.2409 5.99486 19.099 7.05343 19.099C8.112 19.099 8.97014 18.2409 8.97014 17.1823Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.1127 17.1823C18.1127 16.1237 17.2546 15.2656 16.196 15.2656C15.1374 15.2656 14.2793 16.1237 14.2793 17.1823C14.2793 18.2409 15.1374 19.099 16.196 19.099C17.2546 19.099 18.1127 18.2409 18.1127 17.1823Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.96875 17.1836H14.2795"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.1968 15.2665L16.1971 6.97958C16.1971 5.8315 15.266 4.90039 14.1179 4.90039H3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 9.72012H7.45124M4.88794 7.31055H7.45166"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.1133 17.1835L18.9206 17.1837C20.0686 17.1837 20.9997 16.2526 20.9997 15.1045V11.6612C20.9997 10.7252 20.4471 9.87683 19.5909 9.49932L16.1973 8.00195"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5977 12.4102H20.9989"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>{{ tab.tilte }}</div>
          </div>
          <transition>
            <div
              v-if="currentTab.id === tab.id"
              class="h-[2px] w-full absolute mt-[9px] top-full bg-primary rounded-full"
            ></div>
          </transition>
        </li>
      </ul>
      <div class="bg-gray-1 h-[1px] mt-[10px] rounded-full"></div>
    </div>

    <!-- Add shipping address -->
    <div class="flex flex-col gap-10" v-if="currentTab.id === 1">
      <div>Add a shipping address:</div>
      <AppInput
        v-model="region"
        placeholder="Country or region"
        title="Country or region"
      />
      <AppInput v-model="region" placeholder="City" title="City" />
      <AppInput
        v-model="region"
        placeholder="Contact for liaison"
        title="Contact for liaison"
      />
    </div>

    <!-- Select an office address for self-delivery -->
    <div class="flex flex-col gap-10" v-if="currentTab.id === 2">
      <div>Select an office address for self-delivery:</div>
      <AppInput
        v-model="region"
        placeholder="Choose an office"
        title="Choose an office"
      />

      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A80a52729d21ca5e252a7b4f0ba81e2b8e0ac22a3c9df6fcaee02a4016b7e2df6&amp;source=constructor"
        width="100%"
        height="630"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppInput from "../ui/AppInput.vue";
const region = ref("");
interface ITab {
  id: number;
  tilte: string;
  active: boolean;
}
const tabs = ref<ITab[]>([
  {
    id: 1,
    tilte: "Delivery",
    active: true,
  },
  {
    id: 2,
    tilte: "Self-delivery",
    active: false,
  },
]);

const currentTab = ref<ITab>(tabs.value[0]);

function selectTab(tabItem: ITab) {
  currentTab.value = tabItem;
}
</script>

<style scoped></style>
