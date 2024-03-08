<script setup>
    defineProps({
        label: String,
        type: String,
        placeholder: String,
        name: String,
        value: String,
        disabled: Boolean,
    })
</script>

<template>
    <label>{{ label }}</label>
    <input :type="type" :value="value" :placeholder="placeholder" :name="name" :disabled="disabled">
</template>

<style scoped>
    label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        color: var(--black-100);
    }
    input {
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        padding: 12px;
        background-color: var(--White);
        border: 1px solid var(--f0);
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }
</style>