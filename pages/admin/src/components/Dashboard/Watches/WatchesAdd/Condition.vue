<script setup>
import DropDown from '../../DropDown/DropDown.vue';
</script>

<template>
    <div class="condition">
        <h3 class="condition__title">
            Condition
        </h3>
        <ul class="condition__items">
            <li class="condition__items-items">
                <DropDown label="English" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="condition__items-items">
                <DropDown label="Русский" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="condition__items-items">
                <DropDown label="Español" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="condition__items-items">
                <DropDown label="Chinese" drop-down-text="--Ничего не выбрано--" />
            </li>
        </ul>
    </div>
</template>

<style>
    .condition {
        padding: 12px;
        border-radius: 10px;
        background-color: var(--f0);
    }

    .condition__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .condition__items {
        display: flex;
        gap: 16px;
    }

    .condition__items-items {
        flex: 1;
    }

    .drop-down__btn {
        color: var(--Placeholder-text);
    }
</style>