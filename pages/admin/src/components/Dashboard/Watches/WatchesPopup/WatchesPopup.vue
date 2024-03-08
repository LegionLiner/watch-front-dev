<script setup>
import Popup from './../../Dashboard/Popup/Popup.vue';
import PopupInner from './../../Dashboard/Popup/PopupInner.vue';
import { ref } from 'vue';

const props = defineProps({
  products: Number
});
const emit = defineEmits(['change-products', 'close-modal']);
const price = ref(0);
</script>

<template>
    <Popup>
        <PopupInner @close-popup="$emit('close-modal')">
            <strong class="popup__inner-title">Изменение {{ products }} товаров</strong>
            <div class="popup__inner-box">
                <span class="popup__inner-label">Цена</span>
                <div class="popup__inner-items">
                    <input v-model="price">
                    <span class="popup__inner-item">$</span>
                </div>
            </div>
            <div class="popup__btns">
                <button class="popup__btn cancel" @click="$emit('close-modal')">
                    Отмена
                </button>
                <button class="popup__btn add" @click="$emit('change-products', price)">
                    Применить
                </button>
            </div>
        </PopupInner>
    </Popup>
</template>

<style scoped>
.popup__inner-title {
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 32px;
}

.popup__inner-label {
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
    color: var(--black-100);
}

.popup__inner-box {
    margin-bottom: 32px;
}

.popup__inner-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    border: 1px solid var(--f0);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
}

.popup__inner-label {
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

.popup__btns {
    display: flex;
    gap: 16px;
}

.popup__btn {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    padding: 12px 26px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
}

.cancel {
    background-color: white;
    border: 1px solid rgba(201, 201, 201, 1);
}

.add {
    background-color: rgba(189, 149, 66, 1);
    color: white;
}
</style>