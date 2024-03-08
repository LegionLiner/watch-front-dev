<script setup>
    import { order } from '../../../data/order-data';
    import {humanList} from './../../../data/human';
    import {transactionList} from './../../../data/transactions'
</script>

<template>
    <div class="details-bottom">
        <div class="details-bottom__start">
            <strong class="details-bottom__title">
                Детали заказа
            </strong>
            <div class="order-info">
                <ul class="order-info__top">
                    <li class="order-info__item">
                        <span class="order-info-label">Итого</span>
                        <p class="order-info__total">USD {{ order.totalPrice }}</p>
                    </li>
                    <li class="order-info__item">
                        <span class="order-info-label">Доставка</span>
                        <p class="order-info__delivery">{{ order.deliveryPrice }}</p>
                    </li>
                    <li class="order-info__item">
                        <span class="order-info-label">
                            <img src="./../../../img/dashboard/calendar-icon.svg" alt="icon">
                            Время доставки
                        </span>
                        <p class="order-info__deliverytime">{{ order.deliveryTime }}</p>
                    </li>
                    <li class="order-info__item">
                        <span class="order-info__last-label">Всего</span>
                        <p class="order-info__last"><span>USD</span> {{ order.totalPrice }}</p>
                    </li>
                </ul>
            </div>
            <ul class="order-goods">
                <li class="order-goods__item" v-for="item in order.orderedProducst">
                    <img class="order-goods__img" :src="item.img" alt="">
                    <div class="order-goods__desc">
                        <span class="order-goods__label">{{ item.launchYear }} • New</span>
                        <strong class="order-goods__name">{{ item.name }}</strong>
                    </div>
                    <div class="order-goods__end">
                        <span class="order-goods__label">Price</span>
                        <strong class="order-goods__price">{{ item.price }}</strong>
                    </div>
                </li>
            </ul>
        </div>
        <div class="details-bottom__end">
            <ul class="human-list">
                <li class="human-list__item" v-for="human in humanList">
                    <h3 class="human-list__title">
                        {{ human.skill }}
                    </h3>
                    <div class="human-list__info">
                        <img :src="human.img" alt="img">
                        <div class="human-list__desc">
                            <p class="human-list__name">{{ human.name }}</p>
                            <span class="human-list__contact">{{ human.contact }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="transactions-wrapper">
                <h3 class="human-list__title">
                    Транзакции
                </h3>
                <ul class="transactions">
                    <li class="transactions__item" v-for="transaction in transactionList">
                        <span class="transactions-circle"></span>
                        <ul class="transactions__row">
                            <li class="transactions__row-box" v-for="item in transaction.data">
                                <span>{{ item.label }}</span>
                                <p>{{ item.content }}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .details-bottom {
        display: flex;
        gap: 16px;
    }

    .details-bottom__start {
        flex: 1;
        padding: 12px;
        border-radius: 10px;
        background-color: var(--f0);
    }

    .details-bottom__end {
        flex: 1;
    }

    .details-bottom__title {
        display: block;
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .order-info {
        padding: 16px;
        background-color: var(--White);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .order-info__top {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }

    .order-info__item {
        display: flex;
        justify-content: space-between;
    }

    .order-info-label {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }

    .order-info__last-label {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }

    .order-info__total,
    .order-info__delivery,
    .order-info__deliverytime {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }
    
    .order-info__last {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .order-info__last span {
        font-weight: 400;
    }

    .order-goods {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        margin-top: 8px;
    }

    .order-goods__item {
        display: flex;
        gap: 12px;
        padding: 16px;
        background-color: var(--White);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .order-goods__img {
        width: 48px;
        height: 48px;
    }

    .order-goods__label {
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 4px;
        color: var(--Gray-text);
    }

    .order-goods__name {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }

    .order-goods__price {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        color: var(--Primary-1);
    }

    .human-list {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }

    .human-list__info img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
    }

    .human-list__item {
        border-radius: 10px;
        background-color: var(--f0);
        padding: 12px;
    }

    .human-list__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .human-list__info {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .human-list__name {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }

    .human-list__contact {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Gray-text);
    }

    .transactions-wrapper {
        padding: 12px;
        background-color: var(--f0);
        border-radius: 10px;
        margin-top: 16px;
    }

    .transactions {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }

    .transactions__item {
        background-color: var(--White);
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }

    .transactions__item {
        display: flex;
        align-items: center;
        overflow-y: hidden;
    }

    .transactions__row {
        display: flex;
        gap: 16px;
    }

    .transactions__row-box span {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Gray-text);
    }

    .transactions__row-box p {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
    }

    .transactions__row-box:last-child p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:  nowrap;
    }
    .transactions__row-box:last-child {
        overflow: hidden;
    }
    .transactions__row-box:first-child p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:  nowrap;
    }
    .transactions-circle {
        position: relative;
        display: block;
        width: 8px;
        height: 8px;
        background-color: var(--f0);
        border-radius: 50%;
        margin-right: 16px;
    }

    .transactions-circle::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 35px;
        top: 100%;
        left: 50%;
        background-color: var(--f0);
        transform: translateX(-50%);
    }
    .transactions__item:last-child .transactions-circle {
        background-color: var(--Primary-1);
        box-shadow: 0px 0px 0px 4px rgba(189, 149, 66, 0.16);
    }

    .transactions__item:last-child .transactions-circle::after {
        bottom: 100%;
        top: unset;
    }
</style>