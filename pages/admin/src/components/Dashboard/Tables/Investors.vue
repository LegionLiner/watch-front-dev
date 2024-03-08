<script setup>
import { investors } from './../../../data/investors';

import { ref, onMounted } from 'vue';

const filterBtnRefs = ref([]); // Создаем ref для хранения ссылок на кнопки filter-btn


const handleMouseOver = () => {
    const seventhFilterBtn = filterBtnRefs.value[6]; // Получаем седьмую кнопку (индекс 6, так как индексация с нуля)
    seventhFilterBtn.addEventListener('mouseover', () => {
        document.querySelector('.tooltip').classList.add('active');
    });

    seventhFilterBtn.addEventListener('mouseout', () => {
        document.querySelector('.tooltip').classList.remove('active');
    });
};

// Жизненный цикл компонента, вызывается после монтирования
onMounted(() => {
    handleMouseOver(); // Вызываем функцию после монтирования компонента для навешивания обработчика
});

const isEdit = ref(false)

function edit() {
    if(!isEdit.value) {
        isEdit.value = true;
        document.querySelector('.user-edit').classList.add('active');
        document.querySelector('.table').style.display = 'none';
        document.querySelector('.users-top').style.display = 'none';
        document.querySelector('.title-top').style.display = 'none';
    } else {
        isEdit.value = false;
        document.querySelector('.user-edit').classList.remove('active');
        document.querySelector('.table').removeAttribute('style');
    }
}
</script>

<template>
    <div class="table">
        <ul class="table-body" v-for="(investor) in investors">
            <li class="table__head-item" v-for="(thead) in investors" :key="thead.id">
                <div class="table__head-inner" v-for="(item) in thead.th">
                    <span class="table__head-data">{{ item }}</span>
                    <button class="filter-btn" ref="filterBtnRefs">
                        <img src="./../../../img/dashboard/arrows.png" alt="arrows">
                    </button>
                </div>
                <span class="tooltip">
                    Неизрасходованные инвестиции в компанию
                </span>
            </li>
            <li v-for="(item) in investor.td" :class="item.isBlocked ? 'table-body__item block' : 'table-body__item'" :key="item.id">
                <p v-for="(data) in item.data">
                    {{ data.id }}
                    {{ data.name }}
                    {{ data.mail }}
                    {{ data.status }}
                    {{ data.contacts }}
                    {{ data.isInvestor }}
                    {{ data.remainder }}
                    {{ data.registrationDate }}
                </p>
                <div class="table-body__btns">
                    <button class="table-body__btn" @click="edit">Edit</button>
                    <button v-if="(item.isBlocked)" :class="item.isBlocked ? 'table-body__btn active' : 'table-body__btn'">Unlock</button>
                    <button class="table-body__btn" v-else>Block</button>
                    <button class="table-body__btn">Delete</button>
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
    margin-bottom: 20px;
}

.table__head-data {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: var(--black-100);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: .6;
}

.tooltip {
    max-width: 240px;
    position: absolute;
    right: 268px;
    bottom: 100%;
    padding: 4px 8px;
    border-radius: 10px;
    background-color: var(--black-100) !important;
    box-shadow: 0px 4px 32px -8px rgba(23, 23, 27, 0.08);
    color: var(--White);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-out;
}

.tooltip::after {
    position: absolute;
    content: '';
    top: 99%;
    width: 16px;
    height: 8px;
    background-image: url('./../../../img/dashboard/arrow-down.png');
    left: 50%;
    transform: translateX(-50%);
    
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
    align-items: baseline;
    padding: 8px 12px;
    width: 180px;
}

.table__head-inner:nth-child(6) {
    width: 120px;
}

.table__head-inner:nth-child(7) {
    width: 120px;
}

.table-body__item p:nth-child(6) {
    width: 120px;
}

.table-body__item p:nth-child(7) {
    width: 100px;
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
}

.table-body__item p {
    padding: 12px 8px;
    width: 100%;
    max-width: 180px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
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