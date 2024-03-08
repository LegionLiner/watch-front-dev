<template>
    <div class="popup__inner">
        <button class="popup-close" @click="$emit('close-popup')">
            <img src="./../../../../img/dashboard/popup-close.svg" alt="icon">
        </button>
        <slot></slot>
    </div>
</template>

<script setup>
const emit = defineEmits(['close-popup']);
</script>

<style>
    .popup__inner {
        max-width: 480px;
        width: 100%;
        position: relative;
        background-color: rgba(247, 247, 247, 1);
        border: 1px solid white;
        padding: 32px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    }
    .popup-close {
        position: absolute;
        top: 16px;
        right: 16px;
    }
</style>