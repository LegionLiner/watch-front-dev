<script setup>
    import DashboardTop from './../../DashboardTop/DashboardTop.vue';
    import {inputs} from './../../../../data/inputs';
    import DeletePopup from '../DeletePopup/DeletePopup.vue';
</script>

<template>
    <section class="add-brand">
        <div class="add-brand__top">
            <DashboardTop text="Добавить бренд" />
            <div class="add-brand__btns">
                <button class="add-brand__btn cancel">
                    Отмена
                </button>
                <button class="add-brand__btn add">
                    Добавить
                </button>
            </div>
        </div>
        <div class="add-wrapper">
            <div class="add-wrapper__category">
                <h5 class="add-wrapper__title">Категория</h5>
                <div class="add-wrapper__inputs">
                    <div class="add-wrapper__input">
                        <input class="checkbox" type="radio" name="item" checked>
                        <label>Часы</label>
                    </div>
                    <div class="add-wrapper__input">
                        <input class="checkbox" type="radio" name="item">
                        <label>Ювелирные изделия</label>
                    </div>
                    <div class="add-wrapper__input">
                        <input class="checkbox" type="radio" name="item">
                        <label>Аксессуары</label>
                    </div>
                </div>
            </div> 
            <div class="add-wrapper__items" v-for="(input) in inputs">
                <h5 class="add-wrapper__title">{{ input.title }}</h5>
                <div class="add-wrapper__inputs">
                    <div class="add-wrapper__item" v-for="(label) in input.inputs">
                        <label class="add-wrapper__label">{{ label }}</label>
                        <textarea class="add-wrapper__desc" v-if="input.title === 'Описание'" name="desc" placeholder="Введите описание"></textarea>
                        <input class="add-wrapper__name" v-else="input.title === 'Название'" type="text" name="name" placeholder="Название">
                    </div>
                </div>
            </div> 
            <div class="add-wrapper__upload">
                <strong class="upload-text">Логотип бренда</strong>
                <div class="uploaded-item">
                    <img src="./../../../../img/dashboard/uploaded-img.jpg" alt="img">
                    <div class="uploaded-item__btns">
                        <button class="uploaded-item__btn">
                            <img src="./../../../../img/dashboard/edit.png" alt="icon">
                        </button>
                        <button class="uploaded-item__btn">
                            <img src="./../../../../img/dashboard/delete-icon.png" alt="icon">
                        </button>
                    </div>
                </div>
                <button class="upload-brand">
                    <img src="./../../../../img/dashboard/upload.svg" alt="upload">
                    Upload File
                </button>
            </div>
        </div>
        <DeletePopup />
    </section>
</template>

<style scoped>
    .add-brand__top {
        margin-bottom: 23px;
    }

    .add-brand__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .add-brand__btns {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .add-wrapper__inputs {
        display: flex;
    }

    .add-brand__btn {
        padding: 10px 16px;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .add {
        background-color: var(--Primary-1);
        color: var(--White);
    }

    .add-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        border-radius: 10px;
        padding: 24px;
        background-color: var(--gray-3);
        border: 1px solid var(--White);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .add-wrapper__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        margin-bottom: 16px;
        color: var(--Gray-1);
    }

    .add-wrapper__inputs {
        display: flex;
        gap: 16px;
    }

    .add-wrapper__label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 0;
        cursor: text;
    }

    .add-wrapper__input {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    
    .checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        padding: 0;
        background-color: var(--c9);
        transition: .3s ease-out;
    }

    .checkbox::after {
        position: absolute;
        content: '';
        width: 12px;
        height: 12px;
        background-color: var(--White);
        border-radius: 50%;
        opacity: 0;
        transition: .3s ease-out;
    }

    .checkbox:checked {
        background-color: var(--Primary-1);
    }

    .checkbox:checked::after {
        opacity: unset;
    }

    .add-wrapper__category {
        padding-bottom: 20px;
        border-bottom: 1px solid var(--f0);
    }

    .add-wrapper__desc {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--f0);
        background-color: var(--White);
        color: var(--Placeholder-text);
        padding: 10px;
        resize: none;
        min-height: 120px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
    }

    .add-wrapper__name {
        width: 100%;
        border-radius: 10px;
        color: var(--Placeholder-text);
        background-color: var(--White);
        padding: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
    }

    .add-wrapper__item {
        flex: 1;
    }

    textarea::-webkit-scrollbar {
        display: none;
    }

    .upload-text {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
        margin-bottom: 4px;
    }

    .upload-brand {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 26px;
        background-color: var(--Primary-1);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        color: var(--White);
    }

    .uploaded-item {
        display: none;
        max-width: 280px;
        position: relative;
        margin-bottom: 4px;
        font-size: 0;
        border-radius: 10px;
    }

    .uploaded-item__btns {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
    }
</style>