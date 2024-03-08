<script setup>
    import DashboardTop from './../../Dashboard/DashboardTop/DashboardTop.vue';
    import SearchForm from '../SearchForm/SearchForm.vue';
    import {collections} from './../../../data/collections';
    import AddCollection from './../Collections/AddCollection/AddCollection.vue';
</script>

<template>
    <section class="collections">
        <DashboardTop text="Колекции" />
        <div class="collections__top">
            <SearchForm />
            <button class="collections__top__btn">
                <img src="./../../../img/dashboard/plus.svg" alt="icon">
                Добавить колекцию
            </button>
        </div>
        <div class="collections__wrapper">
            <ul class="collections-list">
                <li class="collections-list__item" v-for="(collection) in collections" :key="collection.id">
                    <span class="collections-list__num">
                        {{ collection.productsNum }}
                        Товаров
                    </span>
                    <div class="collections-list__middle">
                        <h5 class="collections-list__title">{{ collection.title }}</h5>
                        <div class="collections-list__btns">
                            <button class="collections-list__btn">
                                <img src="./../../../img/dashboard/edit.png" alt="icon">
                            </button>
                            <button class="collections-list__btn">
                                <img src="./../../../img/dashboard/delete-icon.png" alt="icon">
                            </button>
                        </div>
                    </div>
                    <div class="collections-list__items">
                        <div class="collections-list__images">
                            <img v-for="(image) in collection.images" :src="image" alt="img">
                        </div>
                        <div class="added-num">
                            <span>
                                +3
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <!-- <AddCollection /> -->
</template>

<style scoped>
    .title-top {
        margin-bottom: 20px;
    }

    .collections__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .collections__top__btn {
        display: flex;
        gap: 8px;
        padding: 10px 16px;
        background-color: var(--black-100);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        color: var(--White);
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
    }

    .collections__wrapper {
        padding: 16px;
        border-radius: 10px;
        border: 1px solid var(--White);
        background: var(--gray-3);
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .collections-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
    }


    .collections-list__item {
        background-color: var(--White);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--f0);
        padding: 12px;
    }

    .collections-list__num {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Gray-text);
    }

    .collections-list__middle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .collections-list__items {
        display: flex;
    }

    .collections-list__title {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .added-num {
        position: relative;
        width: 40px;
        height: 40px;
        background-color: var(--f0);
        border-radius: 11px;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Gray-text);
    }

    .added-num span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>