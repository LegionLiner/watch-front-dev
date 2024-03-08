<script setup>
import Popup from '../Dashboard/Popup/Popup.vue';
import PopupInner from '../Dashboard/Popup/PopupInner.vue';
</script>

<template>
    <Popup>
        <PopupInner>
            <img src="./../../../img//dashboard/delete-big.svg" alt="icon">
            <h2 class="popup__inner-title">
                Удалить запись
            </h2>
            <p class="popup__inner-text">
                Вы уверены, что хотите удалить запись?
            </p>
            <div class="popup__inner-btns">
                <button class="popup__inner-btn cancel">
                    Отмена
                </button>
                <button class="popup__inner-btn del">
                    Да, удалить
                </button>
            </div>
        </PopupInner>
    </Popup>
</template>

<style scoped>
    .popup {
        opacity: 0;
        visibility: hidden;
    }
    .popup__inner {
        text-align: center;
    }

    img {
        margin-bottom: 16px;
    }

    .popup__inner-title {
        font-size: 28px;
        font-weight: 500;
        line-height: 120%;
        color: var(--black-100);
        margin-bottom: 8px;
    }

    .popup__inner-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
        margin-bottom: 32px;
    }

    .popup__inner-btns {
        display: flex;
        gap: 16px;
    }

    .popup__inner-btn {
        flex: 1;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        border-radius: 10px;
        padding: 12px 26px;
    }

    .cancel {
        background-color: var(--White);
        border: 1px solid var(--c9);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .del {
        background-color: var(--Primary-1);
        color: var(--White);
    }
</style>