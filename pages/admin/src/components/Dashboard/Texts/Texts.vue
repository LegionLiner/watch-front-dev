<script setup>
import DashboardTop from '../DashboardTop/DashboardTop.vue';
import SearchForm from './../SearchForm/SearchForm.vue';
import TextList from './../Texts/TextList/TextList.vue';
import TextPopup from './TextPopup/TextPopup.vue';
</script>

<template>
    <section class="texts">
        <DashboardTop text="Тексты" />
        <SearchForm />
        <TextList />
    </section>
    <TextPopup />
</template>

<style scoped>
    .title-top {
        margin-bottom: 20px;
    }
</style>