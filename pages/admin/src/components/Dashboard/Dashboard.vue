<script setup>
    import Sidebar from './Sidebar/Sidebar.vue';
    import Review from './Review/Review.vue';
    import DashboardMain from './DashboardMain/DashboardMain.vue';
    import Texts from './Texts/Texts.vue';
    import Options from './Options/Options.vue';
    import Users from './Users/Users.vue';
    import Brands from './Brands/Brands.vue';
    import AddBrand from './Brands/AddBrand/AddBrand.vue';
    import Collections from './Collections/Collections.vue';
    import Watches from './Watches/Watches.vue';
    import Investment from './Investment/Investment.vue';
    import Reporting from './Reporting/Reporting.vue';
    import Sales from './Sales/Sales.vue';
    import OrderDetails from './OrderDetails/OrderDetails.vue';
</script>

<template>
    <main class="dashboard-admin">
        <Sidebar />
        <DashboardMain>
            <!-- <Review />
            <Texts />
            <Options />
            <Users />
            <Brands />
            <AddBrand />
            <Collections /> -->
            <Watches />
            <!-- <Investment />
            <Reporting />
            <Sales />
            <OrderDetails /> -->
        </DashboardMain>
    </main>
</template>

<style scoped>
    main.dashboard-admin {
        padding-top: 150px;
        display: flex;
        height: 100vh;
    }
</style>