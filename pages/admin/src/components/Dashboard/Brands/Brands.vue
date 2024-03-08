<script setup>
    import DashboardTop from './../DashboardTop/DashboardTop.vue';
    import SearchForm from '../SearchForm/SearchForm.vue';
    import DropDown from '../DropDown/DropDown.vue';
    import {productCards} from './../../../data/brands';
    import Pagination from './../Pagination/Pagination.vue';
</script>

<template>
    <section class="brands">
        <DashboardTop text="Бренды" />
        <div class="brands__top">
            <div class="brands__top-left">
                <SearchForm />
                <DropDown label="Язык" drop-down-text="English" />
            </div>
            <button class="brands__top-btn">
                <img src="./../../../img/dashboard/plus.svg" alt="icon">
                Добавить бренд
            </button>
        </div>
        <ul class="brands-list">
            <li class="brands-list__item" v-for="(card) in productCards" :key="card.id">
                <div class="brands-list__img">
                    <img :src="card.img" alt="img">
                </div>
                <span class="brands-list__num">
                    {{ card.productNum }} товаров
                </span>
                <div class="brands-list__items">
                    <h5 class="brands-list__title">{{ card.title }}</h5>
                    <div class="brands-list__btns">
                        <button class="barand-list__btn">
                            <img src="./../../../img/dashboard/edit.png" alt="icon">
                        </button>
                        <button class="barand-list__btn">
                            <img src="./../../../img/dashboard/delete-icon.png" alt="icon">
                        </button>
                    </div>
                </div>
                <p class="brands-list__desc">{{ card.description }}</p>
            </li>
        </ul>
        <div class="brands__bottom">
            <Pagination />
            <span>
                Показано 20 результатов
            </span>
        </div>
    </section>
</template>

<style scoped>
    .title-top {
        margin-bottom: 20px;
    }

    .brands__top {
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;
    }

    .brands__top-left {
        display: flex;
        gap: 12px;
        flex: 1;
        max-height: 70px;
    }

    .brands__top-btn {
        display: flex;
        gap: 8px;
        padding: 10px 16px;
        border-radius: 10px;
        background-color: var(--black-100);
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        color: var(--White);
    }
    .brands-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
        background-color: var(--gray-3);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--White);
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 20px;
    }

    .brands-list__item {
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--f0);
        padding: 12px;
        background-color: var(--White);
    }

    .brands-list__img {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 124px;
        margin-bottom: 10px;
    }

    .brands-list__num {
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 4px;
    }

    .brands-list__items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
    }

    .brands-list__btns {
        display: flex;
    }

    .brands-list__desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        align-self: stretch;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Gray-text);
    }

    .add-brand__wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        background-color: var(--gray-3);
        padding: 24px;
        border-radius: 10px;
        border: 1px solid var(--White);
    }

    .drop-down {
        max-width: 180px;
    }

    .brands__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
    }
</style>