<script setup>
import DashboardTop from './../DashboardTop/DashboardTop.vue';
import SearchForm from '../SearchForm/SearchForm.vue';
import WatchesList from './../Tables/WatchesList.vue';
import Pagination from '../Pagination/Pagination.vue';
import WatchesPopup from './WatchesPopup/WatchesPopup.vue';
import WatchesAdd from './WatchesAdd/WatchesAdd.vue';
// import { useApiFetch } from '../'
import { ref } from 'vue';

// const { data } = useApiFetch("watches", {
//     method: "GET",
// });

const showActions = ref(false);
const actions = ref(null);
const chosen = ref([]); 
const showModal = ref(false);
const changing = ref('');
const filtered = ref(['1', '2', '3', '1']);

function filterByName(name) {
    console.log(name, filtered.value);
}
function editing(query) {
    changing.value = query;
    showActions.value = false;
    showModal.value = true;
}
function changeProducts(price) {
    console.log(price);
    showModal.value = false;
}
function closeModal() {
    showModal.value = false;
}

document.addEventListener('click', (e) => {
    let el = e.target;
    const nodes = [];
    nodes.push(el);

    while (el) {
        nodes.unshift(el.parentNode);
        el = el.parentNode;
    }

    const has = nodes.reduce((res, element) => {
        return res || element === actions.value;
    }, false);

    if (!has) {
        showActions.value = false;
    }
});
</script>

<template>
    <section class="watches">
        <DashboardTop text="Часы" />
        <div class="watches__top">
            <SearchForm @input="filterByName" />
            <div class="watches__btns">
                <div class="actions_select" ref="actions">
                    <span>Выбрано {{ chosen.length }} товаров</span>
                    <button v-if="chosen.length == 0" class="watches__btn actions" @click="showActions = !showActions">
                        Действия
                        <img src="./../../../img/dashboard/arrow-gray.svg" alt="icon">
                    </button>
                    <button v-else class="watches__btn actions disabled">
                        Действия
                        <img src="./../../../img/dashboard/arrow-gray.svg" alt="icon">
                    </button>
                    <div class="actions_select_list" v-if="showActions">
                        <div class="select_item" @click="editing('price')">
                            Цена
                        </div>
                        <div class="select_item" @click="editing('invest-price')">
                            Цена инвестирования
                        </div>
                    </div>
                </div>
                <div>
                    <button class="watches__btn add">
                        <img src="./../../../img/dashboard/plus.svg" alt="icon">
                        Добавить товар
                    </button>
                </div>
            </div>
        </div>
        <WatchesList />
    </section>
    <div class="pagination-wrapper">
        <Pagination />
        <span>Показано 20 результатов</span>
    </div>
    <WatchesAdd />

    <WatchesPopup v-if="showModal" @change-products="changeProducts" @close-modal="closeModal" />
</template>

<style scoped>
.actions_select {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

.actions_select_list {
    width: 182px;
    position: absolute;
    top: 42px;
    right: 0;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(201, 201, 201, 1);
    border-radius: 10px;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    z-index: 100;
}

.select_item {
    border-radius: 6px;
    padding: 6px;
    cursor: pointer;
}

.select_item:hover {
    background: #F0F0F0;
}

.watches {
    margin-bottom: 20px;
}

.header-top {
    margin-bottom: 20px;
}

.watches__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.watches__btn {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    padding: 10px 16px;
    border-radius: 10px;
}

.watches__btns {
    display: flex;
    gap: 12px;
}

.actions {
    background-color: var(--White);
}
.disabled {
    color: #C9C9C9;
}

.add {
    background-color: var(--black-100);
    color: var(--White);
}

.pagination-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.pagination-wrapper span {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: var(--black-100);
}</style>