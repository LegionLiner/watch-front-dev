<script setup>
    import DashboardTop from './../../DashboardTop/DashboardTop.vue'
    import { addedCollections } from './../../../../data/added-collection';
</script>

<template>
    <section class="add-collection">
        <div class="add-collection__top">
            <DashboardTop text="Добавить колекцию" />
            <div class="add-collection__btns">
                <button class="add-collection__btn cancel">
                    Отмена
                </button>
                <button class="add-collection__btn add">
                    Добавить
                </button>
            </div>
        </div>
        <div class="add-collection__wrapper">
            <div class="add-collection__items">
                <label class="add-collection__label">Название колекции:</label>
                <input class="add-collection__input" type="text" name="name" value="34853723">
            </div>
            <div class="added-wrapper">
                <h4 class="added-wrapper__title">
                    Часы в колекции
                </h4>
                <ul class="added-list">
                    <li class="added-list__add">
                        <div class="added-list__top">
                            <img src="./../../../../img/dashboard/collections/border-top-left.svg" alt="icon">
                            <img src="./../../../../img/dashboard/collections/border-top-right.svg" alt="icon">
                        </div>
                        <button class="added-list__btn">
                            <img src="./../../../../img//dashboard/collections/plus.svg" alt="icon">
                            Добавить часы
                        </button>
                        <div class="added-list__bottom">
                            <img src="./../../../../img/dashboard/collections/border-bottom-left.svg" alt="icon">
                            <img src="./../../../../img/dashboard/collections/border-bottom-right.svg" alt="icon">
                        </div>
                    </li>
                    <li class="added-list__item" v-for="(addedCollection) in addedCollections" :key="addedCollection.id">
                        <button class="added-list__del">
                            <img src="./../../../../img/dashboard/delete-icon.png" alt="icon">
                        </button>
                        <img :src="addedCollection.img" alt="img">
                        <div class="added-list__desc">
                            <span class="added-list__date">
                                {{ addedCollection.date }}
                                • New
                            </span>
                            <h5 class="added-list__title">
                                {{ addedCollection.title }}
                            </h5>
                        </div>
                        <p class="added-list__price">
                            <span class="added-list__label">
                                Price
                            </span>
                            {{ addedCollection.price }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .add-collection__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 23px;
    }
    .add-collection__btns {
        display: flex;
        gap: 10px;
    }

    .add-collection__btn {
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        padding: 12px 16px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .cancel {
        background-color: var(--White);
        border: 1px solid var(--c9);
    }

    .add-collection__wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        padding: 24px;
        background-color: var(--gray-3);
        border-radius: 10px;
        border: 1px solid var(--White);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .add-collection__items {
        width: 100%;
    }

    .add-collection__label {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .add-collection__input {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        background-color: var(--White);
        border-radius: 10px;
        border: 1px solid var(--f0);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .added-wrapper {
        background-color: var(--f0);
        border-radius: 10px;
        padding: 12px;
    }

    .added-wrapper__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .added-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
    }

    .added-list li {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 12px;
        padding: 16px;
        border-radius: 10px;
        background-color: var(--White);
    }

    .added-list__del {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .added-list__top,.added-list__bottom {
        display: flex;
        justify-content: space-between;
    }

    .added-list__btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .added-list__date {
        display: block;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: var(--Gray-text);
        margin-bottom: 4px;
    }

    .added-list__title {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-10);
    }

    .added-list__label {
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 4px;
        color: var(--Gray-text);
    }

    .added-list__price {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--Primary-1);
    }
</style>