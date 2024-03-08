<script setup>
import Popup from '../../Dashboard/Popup/Popup.vue';
import PopupInner from '../../Dashboard/Popup/PopupInner.vue';
</script>

<template>
    <Popup>
        <PopupInner>
            <strong class>
                Редактировать секцию
            </strong>
            <div class="popup-input__box">
                <label>
                    Название секции
                </label>
                <input type="text" name="text" value="Header">
            </div>
            <div class="buttons">
                <button class="buttons__btn cancel">
                    Отмена
                </button>
                <button class="buttons__btn save">
                    Сохранить
                </button>
            </div>
        </PopupInner>
    </Popup>
</template>

<style scoped>
    .popup {
        opacity: 0;
        visibility: hidden;
        transition: .3s ease-out;
    }
    .popup.active {
        opacity: unset;
        visibility: unset;
    }
    strong {
        display: block;
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        font-family: "Azo Sans W01 Medium";
        margin-bottom: 32px;
    }

    label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
        margin-bottom: 4px;
    }

    .popup-input__box {
        margin-bottom: 32px;
    }

    input {
        width: 100%;
        background-color: var(--White);
        border: 1px solid var(--f0);
        padding: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }

    .buttons {
        display: flex;
        gap: 16px;
    }

    .buttons button {
        flex: 1;
        padding: 12px 26px;
        border-radius: 10px;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
    }

    .cancel {
        border: 1px solid var(--c9);
        background-color: var(--White);
    }

    .save {
        background-color: var(--Primary-1);
        color: var(--White);
    }
</style>