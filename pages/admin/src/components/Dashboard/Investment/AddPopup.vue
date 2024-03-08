<script setup>
    import Popup from '../Dashboard/Popup/Popup.vue';
    import PopupInner from '../Dashboard/Popup/PopupInner.vue';
    import Input from '../Input/Input.vue';
</script>

<template>
    <Popup>
        <PopupInner>
            <strong class="popup__inner-title">
                Добавить инвестицию
            </strong>
            <ul class="popup__inner-inputs">
                <li class="popup__inner-item">
                    <Input value="2020-05-06 11:24:08" label="Время инвестиции" type="text" />
                </li>
                <li class="popup__inner-item">
                    <Input label="С кошелька" placeholder="Введите кошелек" type="text" />
                </li>
                <li class="popup__inner-item">
                    <Input label="Пользователь" placeholder="Введите Email пользователя" type="e-mail" />
                </li>
                <li class="popup__inner-item">
                    <Input label="Размер инвестиции" placeholder="Введите сумму" type="text" />
                </li>
                <li class="popup__inner-item">
                    <Input label="Основной контакт" placeholder="Введите контакт инверстора" />
                </li>
            </ul>
            <div class="popup__inner-btns">
                <button class="popup__inner-btn cancel">Отмена</button>
                <button class="popup__inner-btn save" disabled>Сохранить</button>
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
        display: flex;
        flex-direction: column;
        row-gap: 32px;
    }
    .popup__inner-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--black-100);
    }

    .popup__inner-inputs {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }

    .popup__inner-item:nth-child(1) input {
        color: var(--black-100);
    }

    .popup__inner-item:nth-child(4) {
        position: relative;
    }

    .popup__inner-item:nth-child(4)::after {
        position: absolute;
        content: '$';
        right: 12px;
        top: 50%;
    }

    .popup__inner-item:nth-child(4) input {
        padding-right: 30px;
    }

    .popup__inner-item input {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Placeholder-text);
    }

    .popup__inner-btns {
        display: flex;
        gap: 16px;
    }

    .popup__inner-btn {
        flex: 1;
        width: 100%;
        max-width: 200px;
    }

    .cancel {
        border: 1px solid var(--c9);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border-radius: 10px;
        padding: 12px 26px;
        background-color: var(--White);
    }

    .save {
        background-color: var(--Primary-1);
        border-radius: 10px;
        color: var(--White);
    }

    .save:disabled {
        background-color: var(--c9);
        pointer-events: none;
    }
</style>