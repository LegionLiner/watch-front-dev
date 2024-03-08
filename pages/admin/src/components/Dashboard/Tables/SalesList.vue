<script setup>
import { salesItems } from '../../../data/sales-data';
</script>

<template>
    <div class="table">
        <ul class="table-body" v-for="(sale) in salesItems">
            <li class="table__head-item" v-for="(thead) in salesItems" :key="thead">
                <div class="table__head-inner" v-for="(item, i) in thead.th">
                    <div v-if="i === 0" class="chekcbox">
                        <input type="checkbox" name="checkbox">
                    </div>
                    <span class="table__head-data">{{ item }}</span>
                    <button class="filter-btn" ref="filterBtnRefs">
                        <img src="./../../../img/dashboard/arrows.png" alt="arrows">
                    </button>
                </div>
            </li>
            <li v-for="(item) in sale.td" class="table-body__item" :key="item">
                <div v-for="(data, i) in item.data">
                    <div v-if="i === 0" class="chekcbox">
                        <input type="checkbox" name="checkbox">
                    </div>
                    {{ data.order }}
                    <button v-if="i === 1">
                        <img src="./../../../img/dashboard/show.png" alt="">
                    </button>
                    {{ data.contact }}
                    {{ data.date }}
                    <div v-if="i === 3" class="status-show">
                        <span v-if="data.status === 'Обрабатываются'" class="processed">
                            {{ data.status }}
                        </span>
                        <span v-else-if="data.status === 'На удержании'" class="onhold">
                            {{ data.status }}
                        </span>
                        <span v-else-if="data.status === 'Отменено'" class="cancled">
                            {{ data.status }}
                        </span>
                        <span v-else-if="data.status === 'Завершено'" class="completed">
                            {{ data.status }}
                        </span>
                        <div class="status-show__btn">
                            <button>
                                <img src="./../../../img/dashboard/arrow-down2.png" alt="">
                            </button>
                            <ul class="status-show__items">
                                <li class="status-show__item processed">
                                    Обрабатываются
                                </li>
                                <li class="status-show__item onhold">
                                    На удержании
                                </li>
                                <li class="status-show__item completed">
                                    Завершено
                                </li>
                                <li class="status-show__item cancled">
                                    Отменено
                                </li>
                            </ul>
                        </div>
                    </div>
                    {{ data.total }}
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.table {
    position: relative;
    background-color: var(--gray-3);
    padding: 40px 8px 8px 8px;
    border-radius: 10px;
    margin-top: 20px;
}

.status-show__btn {
    width: 24px !important;
    height: 24px !important;
    position: relative;
    padding: 0 !important;
}

.status-show__items {
    min-width: 142px;
    position: absolute;
    left: 50%;
    top: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    transform: translateX(-50%);
    padding: 6px;
    border-radius: 10px;
    background-color: var(--White);
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    border: 1px solid var(--c9);
    visibility: hidden;
}

.status-show__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    padding: 12px 8px;
    max-height: 28px;
}

.status-show__item:nth-child(2) {
    max-width: 103px;
}

.status-show__item:nth-child(3) {
    max-width: 82px;
}

.status-show__item:nth-child(4) {
    max-width: 76px;
}

.table__head-data {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: var(--black-100);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: .6;
}

.tooltip.active {
    opacity: unset;
    visibility: unset;
}

.drop-down__label {
    margin-bottom: 3px;
}

.table__head-item {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.table__head-inner {
    display: flex;
    align-items: center;
    padding: 8px 12px;
}

.table__head-inner:nth-child(2) {
    transform: translateX(-107%);
}

.table__head-inner:nth-child(3) {
    transform: translateX(-213%);
}

.table__head-inner:nth-child(4) {
    transform: translateX(-146%);
}

.table__head-inner:nth-child(5) {
    transform: translateX(-140%);
}


.status-show {
    max-width: unset !important;
    gap: 8px;
    padding: 0 !important;
}

.status-show span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    border-radius: 10px;
    max-height: 28px;
}

.processed {
    border: 1px solid var(--f0);
}

.onhold {
    border: 1px solid var(--Primary-1);
    color: var(--Primary-1);
    background-color: var(--F4EEE1);
}

.cancled {
    border: 1px solid var(--red);
    color: var(--red);
    background-color: var(--F4E1E1);
}

.completed {
    border: 1px solid var(--Green);
    color: var(--Green);
    background-color: var(--greentr);
}

.status-show button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    border: 1px solid var(--c9);
}

.chekcbox {
    margin-right: 8px;
    font-size: 0;
}

.chekcbox input {
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: var(--c9);
    border-radius: 4px;
    transition: .3s ease-out;
    flex-shrink: 0;
}

.chekcbox input::after {
    position: absolute;
    content: '';
    background-image: url('./../../../img/dashboard/checked-icon.svg');
    background-repeat: no-repeat;
    width: 11px;
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: .3s ease-out;
    opacity: 0;
}

.chekcbox input:checked {
    background-color: var(--Primary-1);
}

.chekcbox input:checked::after {
    opacity: unset;
}

.table-body {
    position: relative;
    background-color: var(--White);
    border-radius: 10px;
}

.table-body__item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--f0);
    padding: 0 3px;
}

.table-body__item div {
    display: flex;
    align-items: center;
    padding: 12px 8px;
    width: 100%;
    max-width: 180px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
}

.table-body__item div:nth-child(1) {
    max-width: 36px;
}

.table-body__item div:nth-child(2) {
    gap: 8px;
}

.table-body__item div:nth-child(4) {
    gap: 8px;
}

.table-body__item .chekcbox {
    padding-left: 1px;
}

.table-body__btns {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
}

.table-body__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--c9);
    border-radius: 10px;
    padding: 12px 10px;
    max-height: 28px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    background-color: var(--White);
}

.table-body__btn:nth-child(2) {
    width: 60px;
}

.table-body__item.block {
    background-color: var(--F4E1E1);
}

.table-body__btn.active {
    border: 1px solid var(--red);
}
</style>