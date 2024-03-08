<script setup>
import DashboardTop from '../DashboardTop/DashboardTop.vue';
import investmentcards from './../Investment/investmentcards.vue';
import Report from '../Tables/Report.vue';
import ReportingPopup from './ReportingPopup.vue';
</script>

<template>
    <DashboardTop text="Отчетность" />
    <investmentcards />
    <Report />
    <ReportingPopup />
</template>

<style scoped>
    .title-top {
        margin-bottom: 20px;
    }
</style>