<script setup>
    import DashboardTopVue from '../DashboardTop/DashboardTop.vue';
    import DetailsBox from './DetailsBox.vue'
</script>

<template>
    <section class="order-details">
        <div class="order-details__top">
            <DashboardTopVue text="Детали заказа" />
            <button class="order-details__close">
                Закрыть
            </button>
        </div>
        <DetailsBox />
    </section>
</template>

<style>
    .order-details__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 23px;
    }

    .order-details__close {
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        border-radius: 10px;
        background-color: var(--White);
        padding: 10px 16px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--c9);
    }
</style>