<script setup>
import { ref, reactive } from 'vue';
import texts from './../../../../data/text-list';

const activeText = ref(null);
const scrollHeights = reactive({});

function toggleText(index) {
    activeText.value = (activeText.value === index) ? null : index;
    if (activeText.value !== null) {
        const textContent = document.querySelector(`#text_${index}`);
        if (textContent) {
            scrollHeights[index] = textContent.scrollHeight;
        }
    }
}

const isOpen = ref(false);

function popupShow(index) {
    if(!isOpen.value) {
        isOpen.value = true;
        document.querySelector('.popup').classList.add('active');
        document.documentElement.style.overflow = 'hidden';
        const title = document.querySelectorAll('.button-box__btn')[index].textContent;
        const inputBox = document.querySelector('.popup-input__box input');
        inputBox.value = title;
    }
}
</script>

<template>
    <ul class="text-list">
        <li :class="activeText === index ? 'text-list__item active' : 'text-list__item'" v-for="(text, index) in texts" :key="text.id">
            <div class="button-box">
                <button class="button-box__btn"  @click="toggleText(index)">{{ text.title }}</button>
                <div class="right-items">
                    <button class="right-items__btn" @click="popupShow(index)">
                        <img src="./../../../../img/dashboard/edit.png" alt="icon">
                    </button>
                    <img :class="activeText === index ? 'button-box__arrow active' : 'button-box__arrow'" src="./../../../../img/dashboard/arrow.svg" alt="icon">
                </div>
            </div>
            <ul class="text-content" :style="{ height: activeText === index ? `${scrollHeights[index]}px` : '0' }"
                :id="`text_${index}`">
                <li class="text-content__item" v-for="(item, i) in text.items" :key="i">
                    <label class="text-content__label">{{ item.title }}</label>
                    <div class="text-content_box">{{ item.text }}</div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style>
.text-list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}


.text-list__item {
    border: 1px solid var(--White);
    background-color: var(--White);
    border-radius: 10px;
    padding: 24px;
    transition: .3s ease-out;
}

.text-list__btn {
    display: flex;
}

.right-items {
    display: flex;
    align-items: center;
    gap: 17px;
}

.button-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button-box__btn {
    width: 100%;
    text-align: left;
}

.text-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px 16px;
    overflow: hidden;
    transition: .3s ease-out;
}

.text-content__label {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 4px;
}

.text-content_box {
    padding: 12px 8px;
    background-color: var(--White);
    border-radius: 10px;
    border: 1px solid var(--gray);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: var(--black-100);
}

.text-list__item.active {
    background-color: var(--gray-3);
    border: 1px solid var(--White);
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
}

.button-box__arrow {
    transition: .3s ease-out;
}

.button-box__arrow.active {
    transform: rotate(-180deg);
}
</style>