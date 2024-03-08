<script setup>
import DropDown from '../../DropDown/DropDown.vue';
</script>

<template>
    <div class="gender">
        <h3 class="gender__title">
            Gender
        </h3>
        <ul class="gender__items">
            <li class="gender__items-item">
                <DropDown label="English" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="gender__items-item">
                <DropDown label="Русский" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="gender__items-item">
                <DropDown label="Español" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="gender__items-item">
                <DropDown label="Chinese" drop-down-text="--Ничего не выбрано--" />
            </li>
        </ul>
    </div>
</template>

<style>
    .gender {
        background-color: var(--f0);
        border-radius: 10px;
        padding: 12px;
    }

    .gender__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .gender__items {
        display: flex;
        gap: 16px;
    }

    .gender__items-item {
        flex: 1;
    }
</style>