<script setup>
 import DashboardTop from '../../DashboardTop/DashboardTop.vue';
 import EditItems from './EditItems.vue';
</script>

<template>
    <section class="user-edit">
        <div class="user-edit__top">
            <DashboardTop text="Редактировать пользователя" />
            <div class="user-edit__btns">
                <button class="user-edit__btn cancel">
                    Отмена
                </button>
                <button class="user-edit__btn add">
                    Добавить
                </button>
            </div>
        </div>
        <EditItems />
    </section>
</template>

<style scoped>
    .user-edit {
        flex-grow: 1;
        display: none;
    }

    .user-edit.active {
        display: block;
    }
    .user-edit__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .user-edit__btns {
        display: flex;
        gap: 10px;
    }

    .user-edit__btn {
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        padding: 10px 16px;
        border-radius: 10px;
    }

    .cancel {
        background-color: var(--White);
        color: var(--black-100);
        border: 1px solid var(--c9);
    }

    .add {
        background-color: var(--Primary-1);
        color: var(--White);
    }
</style>