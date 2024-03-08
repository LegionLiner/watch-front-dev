<script setup>
    import Popup from '../Dashboard/Popup/Popup.vue';
    import PopupInner from '../Dashboard/Popup/PopupInner.vue';
    import Input from '../Input/Input.vue';
</script>

<template>
    <Popup>
        <PopupInner>
            <strong class="popup__inner-title">
                Редактировать инвестицию
            </strong>
            <ul class="popup__inner-inputs">
                <li class="popup__inner-item">
                    <Input label="Время инвестиции" value="2020-05-06 11:24:08" type="text" />
                </li>
                <li class="popup__inner-item">
                    <Input label="С кошелька" value="0x173bB3CFEe874d7B2063312c87edB275D0d656d2" type="text" />
                </li>
                <li class="popup__inner-item">
                    <Input label="Пользователь" value="redaniel@gmail.com" type="e-mail" />
                </li>
                <li class="popup__inner-item">
                    <Input label="Размер инвестиции" value="19000" type="text" />
                </li>
                <li class="popup__inner-item">
                    <Input label="Основной контакт" value="@Jor-El" type="text" />
                </li>
            </ul>
            <div class="popup__inner-btns">
                <button class="popup__inner-btn cancel">
                    Отмена
                </button>
                <button class="popup__inner-btn save">
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

    .popup__inner-item:nth-child(4) {
        position: relative;
    }

    .popup__inner-item:nth-child(4)::after {
        position: absolute;
        content: '$';
        right: 12px;
        top: 50%;
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
        padding: 12px 26px;
        border-radius: 10px;
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
