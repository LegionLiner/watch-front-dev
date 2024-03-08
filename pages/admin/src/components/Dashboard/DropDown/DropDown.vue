<script setup>
import { ref } from 'vue';
import SelectItems from '../SelectItems/SelectItems.vue';

    const props = defineProps({
        label: String,
        dropDownText: String,
        items: Array,
        selected: Object
    });
    const isSelect = ref(false);
    const selected = ref(props.selected || {});

    function selectToggle() {
        isSelect.value = !isSelect.value;
    }
    function chooseItem(item) {
        selected.value = item;
    }
</script>


<template>
    <div class="drop-down">
        <label class="drop-down__label">
            {{ label }}
        </label>
        <button class="drop-down__btn" @click="selectToggle" :class="{ 'active-select': isSelect }">
            {{ selected.title || dropDownText }}
            <img src="./../../../img/dashboard/arrow.svg" alt="">
        </button>
        <SelectItems :items="items" :class="isSelect ? 'select-items active' : 'select-items'" @close="selectToggle" @choose-item="chooseItem" />
    </div>
</template>

<style>
    .drop-down {
        position: relative;
        width: 100%;
        max-width: 180px;
    }

    .drop-down__options {
        position: absolute;
        padding: 10px;
        background-color: var(--White);
        left: 0;
        right: 0;
        border-radius: 10px;
        top: 100%;
        z-index: 1;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        transition: .3s ease-out;
        opacity: 0;
        visibility: hidden;
    }

    .drop-down__options.active {
        opacity: unset;
        visibility: unset;
    }

    .drop-down__label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .drop-down__btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--f0);
        width: 100%;
        background-color: var(--White);
        padding: 8px 15px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
    }
    .drop-down__btn.active-select {
        border: 1px solid var(--Primary-1, #BD9542);
        background: var(--White, #FFF);
        box-shadow: 0px 0px 0px 3px rgba(24, 24, 24, 0.08);
    }
</style>