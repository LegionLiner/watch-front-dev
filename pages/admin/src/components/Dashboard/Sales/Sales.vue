<script setup>
    import DashboardTop from '../DashboardTop/DashboardTop.vue';
    import DropDown from '../DropDown/DropDown.vue';
    import SearchForm from '../SearchForm/SearchForm.vue';
    import SalesList from '../Tables/SalesList.vue';
</script>

<template>
    <section class="sales">
        <DashboardTop text="Продажи" />
        <div class="sales__top">
            <div class="sales__top-start">
                <SearchForm class="sales__search" />
                <DropDown class="sales__dropdown" label="Статус" drop-down-text="Все (2349)" />
            </div>
            <div class="sales__top-end">
                <DropDown drop-down-text="Действия" />
                <button class="sales__top-btn add">
                    <img src="./../../../img/dashboard/plus.svg" alt="icon">
                    Добавить товар
                </button>
                <a href="#" class="sales__top-btn download">
                    Скачать в CSV
                </a>
            </div>
        </div>
        <SalesList />
    </section>
</template>

<style>
    .sales__top {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .sales__top-start {
        max-width: 492px;
        display: flex;
        align-items: flex-end;
        gap: 12px;
        flex: 1;
    }

    .input-box {
        box-shadow: none;
    }

    .sales__search .form-box {
        margin-bottom: 0;
    }

    .sales__dropdown .drop-down__btn {
        color: var(--black-100);
        min-height: 40px;
    }

    .sales__top-end {
        max-width: 488px;
        display: flex;
        flex: 1;
        gap: 12px;
    }

    .sales__top-end .drop-down {
        max-width: 130px;
    }

    .sales__top-end .drop-down__btn {
        border: 1px solid var(--c9);
    }

    .sales__top-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 10px 16px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
    }

    .add {
        background-color: var(--black-100);
        gap: 8px;
        color: var(--White);
    }

    .download {
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--c9);
        background-color: var(--White);
        color: var(--black-100);
    }
</style>