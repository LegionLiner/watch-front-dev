<template>
  <div class="flex flex-col justify-center items-center h-full">
    <AppCard class="w-screen lg:w-[390px] 2xl:w-[472px]">
      <template #header>
        <div class="flex flex-col gap-1">
          <div class="text-gray-text text-[15px] lg:text-[16px]">
            Сумма к выплате
          </div>
          <div class="text-[17px] lg:text-[20px] flex items-center gap-[6px]">
            <span class="font-medium">162.00</span>
            <span>USD</span>
          </div>
        </div>
      </template>
      <template #content>
        <div v-if="stage === 1" class="flex flex-col gap-3 p-6">
          <div class="text-gray-text">Выберите криптовалюту:</div>
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in firstStep"
              class="p-4 border-[1px] border-gray-1 flex items-center gap-3 hover:bg-gray-1 cursor-pointer"
              @click="handleNextStep(item, 1)"
            >
              <component :is="item.icon" />

              <div
                class="text-secondary font-medium flex-1 text-[15px] lg:text-[16px]"
              >
                {{ item.title }}
              </div>
              <IconCehevron class="h-[20px] w-[20px] -rotate-90" />
            </li>
          </ul>
        </div>
        <div v-if="stage === 2" class="flex flex-col gap-3 p-6">
          <div class="text-gray-text">Select a Network:</div>
          <ul class="flex flex-col gap-2" v-if="chain">
            <li
              v-for="item in secondStep[chain]"
              class="p-4 border-[1px] border-gray-1 flex items-center gap-3 hover:bg-gray-1 cursor-pointer"
              @click="handleNextStep(item, 2)"
            >
              <component :is="item.icon" />

              <div
                class="text-secondary font-medium flex-1 text-[15px] lg:text-[16px]"
              >
                {{ item.title }}
              </div>
              <IconCehevron class="h-[20px] w-[20px] -rotate-90" />
            </li>
          </ul>
        </div>
        <div v-if="stage === 3" class="flex flex-col gap-3 p-6">
          <AppInput
            v-model:model-value="address"
            title="Введите свой кошелек для проверки"
          ></AppInput>
          <AppButton
            size="md"
            class="w-full !max-w-full"
            @click="paymentStore.makeOrderPayment"
            >Проверить кошелек</AppButton
          >
          <div
            class="text-secondary text-[14px] text-center underline cursor-pointer"
          >
            Отмена и возврат
          </div>
        </div>
      </template>
      <template #footer>
        <div
          v-if="stage === 1 || stage === 2"
          class="text-secondary text-[14px] text-center underline cursor-pointer"
        >
          Отмена и возврат
        </div>

        <div
          v-if="stage === 3"
          class="text-gray-text text-[14px] flex flex-col justify-center items-center gap-3"
        >
          <div>Оставшееся время:</div>
          <div class="text-secondary text-[20px] font-medium">01:12:53</div>
          <div>1 USDT = 1.0006 USD</div>
        </div>
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import AppInput from "~/components/ui/AppInput.vue";
import IconCehevron from "~/components/icons/IconChevron.vue";
import Ethereum from "~/components/icons/currencies/ethereum.vue";
import Tether from "~/components/icons/currencies/tether.vue";
import AppCard from "~/components/settings/AppCard.vue";
import AppButton from "~/components/AppButton.vue";

const paymentStore = usePaymentsStore();

const stage = ref(1);
const chain = ref<string>();
const network = ref<string>();
const address = ref();

const firstStep = ref([
  {
    title: "Tether (USDT)",
    value: "usdt",
    icon: Tether,
  },
]);

const secondStep = ref({
  usdt: [
    {
      title: "USDT TRC20 Network",
      value: "trc20",
      icon: Tether,
    },
    {
      title: "USDT ERC20 Network",
      value: "erc20",
      icon: Ethereum,
    },
  ],
});

function handleNextStep(step: any, currentStep: number) {
  if (currentStep === 1) {
    chain.value = step.value;
  }
  if (currentStep === 2) {
    network.value = step.value;
  }
  stage.value++;
}

definePageMeta({
  layout: "payment",
});
</script>

<style scoped></style>
