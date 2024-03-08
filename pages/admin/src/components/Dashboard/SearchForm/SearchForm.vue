<template>
        <div class="form-box">
            <div class="input-wrapper">
                <label class="input-wrapper__label">Поиск</label>
                <div class="input-box">
                    <img src="./../../../img/dashboard/search-icon.png" alt="icon">
                    <input v-model="search" type="search" name="search" placeholder="Введите название">
                </div>
            </div>
            <button class="form-box__btn" @click="$emit('input', search)">Искать</button>
        </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['input'],
    data() {
        return {
            search: ''
        }
    },
})
</script>

<style scoped>
    .form-box {
        display: flex;
        align-items: flex-end;
        gap: 4px;
        margin-bottom: 20px;
    }

    .input-wrapper__label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
        margin-bottom: 4px;
        cursor: text;
    }

    .input-box {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: var(--White);
        padding: 12px 8px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--Gray);
        border-radius: 10px;
        max-height: 40px;
    }

    .input-box img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    .input-box input {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: var(--Placeholder-text);
        max-height: 40px;
        border: none;
        width: 100%;
    }

    .form-box__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        border-radius: 10px;
        background-color: var(--Primary-1);
        max-height: 40px;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        color: var(--White);
    }
</style>