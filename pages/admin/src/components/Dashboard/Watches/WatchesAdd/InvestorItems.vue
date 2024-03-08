<script setup>
import DropDown from '../../DropDown/DropDown.vue';
import DelInput from './DelInput.vue';
import { ref } from 'vue';

const props = defineProps({
    investors: Array
})

const investors = ref(props.investors || []);

function newInvestor() {
    investors.value.push({
        name: '',
        amount: ''
    })
}
function deleteInvestor(investor) {
    console.log(investor);
}
</script>

<template>
    <div class="investor-items">
        <h3 class="investor-items__title">
            Инвестора
        </h3>
        <div class="investor-items__inputs">
            <div v-for="investor in investors" class="investor-items__item">
                <DropDown label="Инвестор" drop-down-text="--Ничего не выбрано--" :selected="{title: investor.name, value: investor.name}" />
                <DelInput :investor="investor" label="Сумма вложений" placeholder="Placeholder" @delete-investor="deleteInvestor" />
            </div>
        </div>
        <button class="investor-items__add" @click="newInvestor()">
            <span>
                <img src="./../../../../img/dashboard/watches-add/plus.svg" alt="icon">
            </span>
            Добавить инвестора
        </button>
    </div>
</template>

<style>
    .investor-items {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        border-radius: 10px;
        background-color: var(--f0);
        padding: 12px;
    }

    .investor-items__inputs input {
        color: var(--Placeholder-text);
    }

    .investor-items__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
    }

    .investor-items__inputs {
        display: flex;
        flex-direction: column;
    }

    .investor-items__item {
        display: flex;
        gap: 16px;
    }

    .drop-down {
        max-width: unset;
    }

    .drop-down__btn {
        min-height: 48px;
        color: var(--Placeholder-text);
    }

    .investor-items__add {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .investor-items__add span {
        width: 24px;
        height: 24px;
        border-radius: 10px;
        background-color: var(--White);
        border: 1px solid var(--c9);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0;
    }
    .investor-items__add span img {
        width: 12px;
        height: 12px;
    }
</style>