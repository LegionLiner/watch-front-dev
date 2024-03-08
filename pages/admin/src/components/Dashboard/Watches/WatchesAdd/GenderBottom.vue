<script setup>
import DropDown from '../../DropDown/DropDown.vue';
import Input from '../../Input/Input.vue';
</script>

<template>
    <div class="gender-bottom">
        <ul class="gender-bottom__items">
            <li class="gender-bottom__item">
                <Input label="Reference number:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Listing code:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Listing date:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Location:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Count:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Is best:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Collection id:" placeholder="Введите" />
            </li>
            <li class="gender-bottom__item">
                <Input label="Body material id:" placeholder="Введите" />
            </li>
        </ul>
        <ul class="gender-bottom__ids">
            <li class="gender-bottom__item">
                <DropDown label="Strap material id:" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="gender-bottom__item">
                <DropDown label="Dial color id:" drop-down-text="--Ничего не выбрано--" />
            </li>
            <li class="gender-bottom__item">
                <DropDown label="Function ids:" drop-down-text="--Ничего не выбрано--" />
            </li>
        </ul>
    </div>
</template>

<style>
    .gender-bottom__items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }

    .gender-bottom__ids {
        display: flex;
        margin-top: 16px;
        gap: 16px;
    }

    .gender-bottom__item {
        flex: 1;
    }

    .gender-bottom__item input {
        color: var(--Placeholder-text);
    }
</style>