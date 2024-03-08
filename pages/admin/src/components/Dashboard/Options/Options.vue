<script setup>
import DashboardTop from '../DashboardTop/DashboardTop.vue';
import OptionsCard from './../Options/OptionsCard/OptionsCard.vue'
</script>

<template>
    <section class="options">
        <DashboardTop text="Настройки проекта" />
        <div class="options-content">
            <OptionsCard
                top="Комиссия"
                text="Процент комиссии при продаже инвест часов (%)"
                value="32"
                symbol="%"
            />
            <OptionsCard
                top="Промежуточный Кошелёк"
                text="Промежуточный кошелёк для оплат"
                value="VTY8Rszz3UmQPrJcTLYw2KFoKxUXL2XAX2S"
            />
        </div>
    </section>
</template>

<style scoped>
    .title-top {
        margin-bottom: 23px;
    }

    .options-content {
        display: flex;
        gap: 16px;
        background-color: var(--gray-3);
        padding: 24px;
        border-radius: 10px;
    }
</style>