<script setup>
    defineProps({
        label: String,
        placeholder: String,
        investor: Object
    });
    defineEmits(['delete-investor', 'change-amount'])
</script>

<template>
    <div class="del-input">
        <div class="del-input__box">
            <label>{{ label }}</label>
            <input type="text" :placeholder="placeholder" :value="investor.amount" @input="$emit('change-amount', $event.target.value)">
        </div>
        <button class="del-input__btn" @click="$emit('delete-investor', investor)">
            <img src="./../../../../img/dashboard/watches-add/delete.png" alt="delete">
        </button>
    </div>
</template>

<style>
    .del-input {
        width: 100%;
        display: flex;
        align-items: flex-end;
        gap: 16px;
    }

    .del-input__box {
        position: relative;
        flex: 1;
    }

    .del-input__box::after {
        position: absolute;
        content: '$';
        right: 12px;
        top: 50%;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
    }

    .del-input__box input {
        width: 100%;
        padding: 12px 30px 12px 12px;
        background-color: var(--White);
        border-radius: 10px;
        max-height: 48px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%
    }

    .del-input__box label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
    }

    .del-input__btn {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        background-color: var(--red);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>