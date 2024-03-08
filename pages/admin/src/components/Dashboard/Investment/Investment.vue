<script setup>
import DashboardTop from '../DashboardTop/DashboardTop.vue';
import SearchForm from '../SearchForm/SearchForm.vue';
import InvestmentCards from './InvestmentCards.vue';
import CompanyInvestor from './../Tables/CompanyInvestor.vue';
import AddPopup from './AddPopup.vue';
import EditPopup from './EditPopup.vue';
import DelPopup from './DelPopup.vue';
</script>

<template>
    <section class="investment">
        <DashboardTop text="Инвестиции в компанию"  />
        <InvestmentCards />
        <div class="investment__add">
            <SearchForm />
            <button class="investment__add-btn">
                <img src="./../../../img/dashboard/plus.svg" alt="icon">
                Добавить инвестицию
            </button>
        </div>
        <CompanyInvestor />
    </section>
    <AddPopup />
    <EditPopup />
    <DelPopup />
</template>

<style scoped>
    .title-top {
        margin-bottom: 20px;
    }

    .investment__add {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .investment__add-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background-color: var(--black-100);
        border-radius: 10px;
        color: var(--White);
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
    }
</style>