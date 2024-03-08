<script setup>
import DashboardTop from '../../DashboardTop/DashboardTop.vue';
import DropDown from '../../DropDown/DropDown.vue';
import InvestorItems from './../../Watches/WatchesAdd/InvestorItems.vue';
import Model from './Model.vue';
import ModelBottom from './ModelBottom.vue';
import Condition from './Condition.vue';
import ConditionBottom from './ConditionBottom.vue';
import Gender from './Gender.vue';
import GenderBottom from './GenderBottom.vue';
import { ref } from 'vue';

const investments = ref([
    {
        title: 'Инвестиция',
        value: 'investment'
    },
    {
        title: 'Инвестиция 2',
        value: 'investment 2'
    }
])

const watchCreationForm = ref({
  brand_id: 0,
  model_en: "",
  model_ru: "",
  model_es: "",
  model_cn: "",
  purchase_price: 0,
  investment_price: 0,
  currency: 0,
  reference: "",
  water_resistance: 0,
  body_diameter: 0,
  mechanism_type_en: "nodata",
  mechanism_type_ru: "нет данных",
  mechanism_type_es: "sin datos",
  mechanism_type_cn: "没有数据",
  power_reserve: 0,
  caliber: 0,
  condition_en: "nodata",
  condition_ru: "нет данных",
  condition_es: "sin datos",
  condition_cn: "没有数据",
  watch_type: 0,
  current_nft_address: "string",
  contract_of_sale_nft: "string",
  token_id_nft: 0,
  metadata_nft: 0,
  holder_fees_percent_nft: 0,
  transfer_fee_percent_nft: 0,
  listing_bidding_cancellation_nft: 0,
  gender_en: "unisex",
  gender_ru: "унисекс",
  gender_es: "unisexo",
  gender_cn: "男女通用的",
  reference_number: "string",
  listing_code: "string",
  listing_date: "2023-11-03T10:30:50.433Z",
  location: 0,
  count: 0,
  is_best: false,
  collection_id: 1,
  body_material_id: 37,
  strap_material_id: 49,
  dial_color_id: 22,
  function_ids: [],
  photos: [],
});

function onBrandFileChanged(event, field) {
  watchCreationForm.value.photos = [];
  const target = event.target;

  const files = target.files || [];

  Object.entries(files).forEach((file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      watchCreationForm.value[field].push({
        data_url: reader.result?.toString(),
      });
    };

    reader.readAsDataURL(file[1]);
  });
}
async function handleWatchCreation() {
  errorMessage.value = "";
  errors.value = [];
  isSuccess.value = false;
  isError.value = false;
  isLoading.value = true;

  const { data, error } = await useApiFetch<TResponseSingle<IWatch>>(
    "watches/",
    {
      method: "POST",
      body: watchCreationForm.value,
    }
  );
  if (error.value) {
    errorMessage.value = error.value.data.error;
    if (error.value.data.validation_error) {
      errors.value = error.value.data.validation_error;
    }

    isError.value = true;
  }

  if (data.value) {
    isSuccess.value = true;
    watchCreationForm.value = {
      brand_id: 0,
      model_en: "",
      model_ru: "",
      model_es: "",
      model_cn: "",
      purchase_price: 0,
      investment_price: 0,
      currency: 0,
      reference: "",
      water_resistance: 0,
      body_diameter: 0,
      mechanism_type_en: "nodata",
      mechanism_type_ru: "нет данных",
      mechanism_type_es: "sin datos",
      mechanism_type_cn: "没有数据",
      power_reserve: 0,
      caliber: 0,
      condition_en: "nodata",
      condition_ru: "нет данных",
      condition_es: "sin datos",
      condition_cn: "没有数据",
      watch_type: 0,
      current_nft_address: "string",
      contract_of_sale_nft: "string",
      token_id_nft: 0,
      metadata_nft: 0,
      holder_fees_percent_nft: 0,
      transfer_fee_percent_nft: 0,
      listing_bidding_cancellation_nft: 0,
      gender_en: "unisex",
      gender_ru: "унисекс",
      gender_es: "unisexo",
      gender_cn: "男女通用的",
      reference_number: "string",
      listing_code: "string",
      listing_date: "2023-11-03T10:30:50.433Z",
      location: 0,
      count: 0,
      is_best: false,
      collection_id: 1,
      body_material_id: 37,
      strap_material_id: 49,
      dial_color_id: 22,
      function_ids: [],
      photos: [],
    };
  }

  isLoading.value = false;
}
</script>

<template>
    <section class="watches-add">
        <DashboardTop text="Добавить часы" />
        <div class="watches-add__wrapper">
            <div class="watches-add__top">
                <div class="watches-add__id">
                    <label>Brand ID:</label>
                    <input type="text" name="id" v-model="watchCreationForm.brand_id">
                </div>
                <DropDown :items="investments" label="Инвестиции" drop-down-text="Нет" />
            </div>
            <InvestorItems />
            <Model />
            <ModelBottom />
            <Condition />
            <ConditionBottom />
            <Gender />
            <GenderBottom />
            <div class="watches__upload">
                <span class="watches__upload-label">
                    Photo
                </span>
                <button class="watches__upload-btn">
                    <img src="./../../../../img/dashboard/upload.svg" alt="icon">
                    Upload File
                    <input
                        type="file"
                        multiple
                        @change="onBrandFileChanged($event, 'photos')"
                        accept="image/*"
                        capture
                    />
                </button>
                <ul class="watches__upload-images">
                    <li class="watches__upload-item">
                        <div class="watches__upload-img">
                            <ul class="upload-btns">
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/circle-icon.png" alt="icon">
                                    </button>
                                </li>
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/edit-big.png" alt="icon">
                                    </button>
                                </li>
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/delete-icon-big.png" alt="icon">
                                    </button>
                                </li>
                            </ul>
                            <img src="./../../../../img/dashboard/uploaded-img.jpg" alt="img">
                        </div>
                    </li>
                    <li class="watches__upload-item">
                        <div class="watches__upload-img">
                            <ul class="upload-btns">
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/circle-icon.png" alt="icon">
                                    </button>
                                </li>
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/edit-big.png" alt="icon">
                                    </button>
                                </li>
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/delete-icon-big.png" alt="icon">
                                    </button>
                                </li>
                            </ul>
                            <img src="./../../../../img/dashboard/uploaded-img.jpg" alt="img">
                        </div>
                    </li>
                    <li class="watches__upload-item">
                        <div class="watches__upload-img">
                            <ul class="upload-btns">
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/circle-icon.png" alt="icon">
                                    </button>
                                </li>
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/edit-big.png" alt="icon">
                                    </button>
                                </li>
                                <li class="upload-btns__item">
                                    <button class="upload-btns__btn">
                                        <img src="./../../../../img/dashboard/delete-icon-big.png" alt="icon">
                                    </button>
                                </li>
                            </ul>
                            <img src="./../../../../img/dashboard/uploaded-img.jpg" alt="img">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .header-top {
        margin-bottom: 23px;
    }
    .watches-add__wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        padding: 24px;
        background-color: var(--gray-3);
        border-radius: 10px;
        border: 1px solid var(--White);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .watches-add__top {
        display: flex;
        gap: 24px;
        align-items: center;
        justify-content: space-between;
    }

    .watches-add__id {
        flex: 1;
    }

    .watches-add__id label {
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .watches-add__id input {
        width: 100%;
        background-color: var(--White);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border-radius: 10px;
        border: 1px solid var(--White);
        padding: 12px;
        max-height: 42px;
        color: var(--Placeholder-text);
    }

    .drop-down {
        flex: 1;
        max-width: unset;
    }

    .drop-down__label {
        margin-bottom: 0 !important;
    }

    .watches__upload-label {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
    }

    .watches__upload-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        padding: 12px 26px;
        background-color: var(--Primary-1);
        border-radius: 10px;
        color: var(--White);
        position: relative;
    }
    .watches__upload-btn input {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }

    .watches__upload-images {
        display: none;
        margin-top: 8px;
        gap: 8px;
    }

    .watches__upload-img {
        position: relative;
    }
    .upload-btns {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        padding: 8px;
    }
</style>