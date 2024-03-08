<script setup>
import DropDown from '../DropDown/DropDown.vue';
import Input from '../Input/Input.vue';
import OrderDetailsBottom from './OrderDetailsBottom.vue';
</script>

<template>
    <div class="details-box">
        <ul class="details-box__top">
            <li class="details-box__item">
                <Input label="Номер заказа:" :value="'#34985'" :disabled="true" :type="'text'" name="name" />
            </li>
            <li class="details-box__item">
                <DropDown label="Статус:" drop-down-text="Завершено" />
            </li>
            <li class="details-box__item">
                <Input label="Контакты:" :value="'@EnigmaWhisper'" :type="'text'" :disabled="true" name="name" />
            </li>
            <li class="details-box__item">
                <Input label="Дата:" :value="'2020-05-05 10:21:13'" :type="'text'" name="name" :disabled="true" />
            </li>
        </ul>
        <OrderDetailsBottom />
    </div>
</template>

<style>
.details-box {
    border-radius: 10px;
    border: 1px solid var(--White);
    background-color: var(--gray-3);
    padding: 24px;
}

.details-box__top {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
}

.details-box__item {
    flex: 1;
}

.details-box__item input {
    width: 100%;
}

.details-box__item input:disabled {
    color: var(--Gray-text);
}

.details-box__item .drop-down__btn {
    color: var(--black-100);
}
</style>