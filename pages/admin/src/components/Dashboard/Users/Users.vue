<script setup>
import DashboardTop from './../DashboardTop/DashboardTop.vue';
import SearchForm from '../SearchForm/SearchForm.vue';
import DropDown from './../DropDown/DropDown.vue';
import Investors from './../Tables/Investors.vue';
import Pagination from '../Pagination/Pagination.vue';
import UserEdit from './../Users/UserEdit/UserEdit.vue';
import { ref } from 'vue';

const isSelect = ref(false);

function selectToggle() {
    isSelect.value = !isSelect.value;
}
</script>


<template>
    <DashboardTop text="Пользователи" />
    <div class="users-top">
        <div class="user-top__left">
            <SearchForm />
            <div class="dropdown-wrapper">
                <DropDown label="Статус" drop-down-text="Все" />
            </div>
            <div class="dropdown-wrapper">
                <DropDown label="Статус инвестора" drop-down-text="Все" />
            </div>
        </div>
        <div class="user-top__right">
            <button class="user-top__btn clear">
                Очистить фильтры
            </button>
            <button class="user-top__btn apply">
                Применить фильтры
            </button>
        </div>
    </div>
    <Investors />
    <UserEdit />
    <div class="pagination-wrapper">
        <Pagination />
        <span>Показано 20 результатов</span>
    </div>
</template>

<style>
.title-top {
    margin-bottom: 20px;
}

.dropdown-wrapper {
    position: relative;
    flex: 1;
}

.users-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 20px;
}

.users-top__options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--White);
    padding: 10px;
    z-index: 1;
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-out;
}

.users-top__options.active {
    opacity: unset;
    visibility: unset;
}

.user-top__left {
    width: 100%;
    max-width: 684px;
    display: flex;
    align-items: stretch;
    gap: 12px;
    max-height: 65px;
}

.user-top__right {
    display: flex;
    gap: 12px;
}

.user-top__btn {
    padding: 10px 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    border-radius: 10px;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
}

.clear {
    background-color: var(--White);
    color: var(--black-100);
}

.apply {
    background-color: var(--Primary-1);
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
}
</style>