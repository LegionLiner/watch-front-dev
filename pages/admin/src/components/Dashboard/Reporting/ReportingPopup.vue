<script setup>
    import Popup from '../Dashboard/Popup/Popup.vue';
    import PopupInner from '../Dashboard/Popup/PopupInner.vue';
    import { popupList } from '../../../data/popup-list';
</script>

<template>
    <Popup>
        <PopupInner>
            <strong class="popup__title">
                Подробнее
            </strong>
            <ul class="popup-list">
                <li class="popup-list__item" v-for="list in popupList">
                    <span>{{ list.label }}</span>
                    <p>{{ list.content }}</p>
                </li>
            </ul>
            <button class="popup__close">
                Закрыть
            </button>
        </PopupInner>
    </Popup>
</template>

<style scoped>
    .popup {
        visibility: hidden;
    }
    .popup__inner {
        display: flex;
        flex-direction: column;
        row-gap: 32px;
    }
    .popup__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--black-100);
    }

    .popup-list {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }

    .popup-list__item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--f0);
    }

    .popup-list__item span {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
        opacity: 0.64;
    }

    .popup-list__item p {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }
    .popup-list__item:last-child {
        border-bottom: none;
    }

    .popup__close {
        border: 1px solid var(--c9);
        background-color: var(--White);
        border-radius: 10px;
        padding: 12px 26px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
    }
</style>