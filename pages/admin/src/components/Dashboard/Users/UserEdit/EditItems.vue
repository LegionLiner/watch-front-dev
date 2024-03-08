<script setup>
    import DropDown from '../../DropDown/DropDown.vue';
    import SelectItems from './../../SelectItems/SelectItems.vue'
</script>

<template>
    <div class="edit-items__wrapper">
        <ul class="edit-items top-edit">
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <label class="edit-items__label">ID</label>
                    <input type="text" value="55069827" disabled />
                </div>
            </li>
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <label class="edit-items__label">Дата регистрации</label>
                    <input type="text" value="2020-05-06 11:24:08" disabled />
                </div>
            </li>
        </ul>
        <ul class="edit-items">
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <label class="edit-items__label">Имя</label>
                    <input type="text" value="2020-05-06 11:24:08" />
                </div>
            </li>
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <label class="edit-items__label">Почта</label>
                    <input type="text" value="2020-05-06 11:24:08" />
                </div>
            </li>
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <DropDown label="Статус" drop-down-text="Normal user" />
                </div>
                <button class="edit-items__add">
                    <img src="./../../../../img/dashboard/plus.svg" alt="">
                    Добавить
                </button>
            </li>
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <label class="edit-items__label">Контакты</label>
                    <input type="text" value="(316) 555-0116" />
                </div>
            </li>
            <li class="edit-items__item">
                <div class="edit-items__inner">
                    <DropDown label="Инвестор" drop-down-text="No" />
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .edit-items__wrapper {
        background-color: var(--gray-3);
        border-radius: 10px;
        padding: 24px;
        margin-bottom: 20px;
    }

    .edit-items {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        gap: 24px;
        border-radius: 10px;
    }

    .top-edit {
        flex-direction: row;
        margin-bottom: 24px;
    }

    .edit-items__label {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        margin-bottom: 4px;
    }

    .edit-items__inner input {
        width: 100%;
        padding: 12px;
        background-color: var(--White);
        border-radius: 10px;
        border: 1px solid var(--f0);
    }

    .edit-items__inner input:disabled {
        border: 1px solid var(--White);
        background-color: var(--f0);
        color: var(--Gray-text);
    }

    .edit-items__item {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
    }

    .edit-items__inner {
        position: relative;
        width: 100%;
    }

    .edit-items__add {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        gap: 8px;
        padding: 12px 26px;
        background-color: var(--Primary-1);
        border-radius: 10px;
        transform: translateY(21%);
        color: var(--White);
    }

    .drop-down {
        position: relative;
        max-width: unset;
    }

    .drop-down__label {
        display: block;
        margin-bottom: 3px;
    }
</style>