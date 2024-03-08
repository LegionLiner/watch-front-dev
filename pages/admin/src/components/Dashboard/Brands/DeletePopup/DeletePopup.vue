<script setup>
    import Popup from '../../Dashboard/Popup/Popup.vue';
    import PopupInner from '../../Dashboard/Popup/PopupInner.vue';
    import DropDown from '../../DropDown/DropDown.vue';
</script>

<template>
    <Popup>
        <PopupInner>
            <img class="top-img" src="./../../../../img/dashboard/delete-big.svg" alt="img">
            <strong class="popup__inner-title">
                Подтверждение удаления
            </strong>
            <p class="popup__inner-text">
                Чтобы удалить данный бренд “Elegant Time”, вам необходимо выбрать другой бренд, к которому будут привязаны 120 товаров, связанные с брендом, который вы хотите удалить.
            </p>
            <div class="select-product">
                <DropDown 
                    label="Привязать товары к бренду"
                    drop-down-text="--Ничего не выбрано--"
                />
            </div>
            <div class="popup__inner-btns">
                <button class="popup__inner-btn cancel">
                    Отмена
                </button>
                <button class="popup__inner-btn apply" disabled>
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

    .top-img {
        margin-bottom: 16px;
    }

    .popup__inner-title {
        display: block;
        font-size: 28px;
        font-weight: 500;
        line-height: 120%;
        margin-bottom: 8px;
        color: var(--black-100);
    }

    .popup__inner-text {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        margin-bottom: 32px;
        color: var(--black-100);
    }

    .drop-down{
        max-width: unset;
        text-align: left;
        margin-bottom: 32px;
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
        padding: 12px 26px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .cancel {
        border-radius: 10px;
        background-color: var(--White);
        border: 1px solid var(--c9);
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
    }

    .apply {
        background-color: var(--Primary-1);
        color: var(--White);
    }

    .apply:disabled {
        pointer-events: none;
        background-color: var(--c9);
    }
</style>