<script setup>
defineProps({
    top: String,
    text: String,
    value: String,
    symbol: String,
})
</script>

<template>
    <div class="options-content__card">
        <strong>{{ top }}</strong>
        <p>Процент комиссии при продаже инвест часов (%)</p>
        <div class="options-content__input">
            <span>{{ value }}</span>
            <span class="percent">{{ symbol }}</span>
        </div>
    </div>
</template>

<style scoped>
    strong {
        display: block;
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 4px;
    }
    .options-content__card {
        flex: 1;
        padding: 12px;
        background-color: var(--f0);
        border-radius: 10px;
    }
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: #747476;
        margin-bottom: 12px;
    }
    .options-content__input {
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;
        background-color: var(--White);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border: 1px solid var(--f0);
    }
</style>