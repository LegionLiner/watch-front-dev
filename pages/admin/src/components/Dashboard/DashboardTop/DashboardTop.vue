<script setup>
    defineProps({
        text: String
    })
</script>


<template>
    <h2 class="title-top">{{ text }}</h2>
</template>

<style>
    .title-top {
        font-size: 28px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
    }
</style>