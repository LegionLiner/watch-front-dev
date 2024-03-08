<script setup>
    import { investmentCards } from '../../../data/investment-cards';
</script>

<template>
    <ul class="investment-cards">
        <li class="investment-cards__item" v-for="card in investmentCards" :key="card">
            <strong class="investment-cards__price">
                {{ card.price }}
            </strong>
            <p class="investment-card__text">
                {{ card.text }}
            </p>
        </li>
    </ul>
</template>

<style scoped>
    .investment-cards {
        display: flex;
        gap: 12px;
        margin-bottom: 20px;
    }
    .investment-cards__item {
        position: relative;
        padding: 12px 12px 12px 20px;
        background-color: var(--White);
        border-radius: 10px;
        flex: 1;
        overflow-y: hidden;
    }

    .investment-cards__price {
        display: block;
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        margin-bottom: 4px;
    }

    .investment-cards__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
    }

    .investment-cards__item:nth-child(1)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        height: 100%;
        background-color: var(--Primary-1);
    }
    
    .investment-cards__item:nth-child(1) .investment-cards__price {
        color: var(--Primary-1);
    }

    .investment-cards__item:nth-child(2) .investment-cards__price {
        color: var(--Green);
    }

    .investment-cards__item:nth-child(3) .investment-cards__price {
        color: var(--purple);
    }

    .investment-cards__item:nth-child(4) .investment-cards__price {
        color: var(--orange);
    }

    .investment-cards__item:nth-child(5) .investment-cards__price {
        color: var(--Green);
    }

    .investment-cards__item:nth-child(6) .investment-cards__price {
        color: var(--purple2);
    }

    .investment-cards__item:nth-child(7) .investment-cards__price {
        color: var(--blue);
    }

    .investment-cards__item:nth-child(2)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        height: 100%;
        background-color: var(--Green);
    } 
    .investment-cards__item:nth-child(3)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        background-color: var(--purple);
        height: 100%;
    } 
    .investment-cards__item:nth-child(4)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        background-color: var(--orange);
        height: 100%;
    } 
    .investment-cards__item:nth-child(5)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        background-color: var(--Green);
        height: 100%;
    } 
    .investment-cards__item:nth-child(6)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        background-color: var(--purple2);
        height: 100%;
    } 
    .investment-cards__item:nth-child(7)::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 6px;
        border-radius: 10px 0 0 10px;
        background-color: var(--blue);
        height: 100%;
    } 
</style>