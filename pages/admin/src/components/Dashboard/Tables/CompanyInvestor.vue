<script setup>
    import {companyInvestors} from './../../../data/company-investor'
</script>

<template>
    <div class="table">
        <ul class="table-body" v-for="companyInvestor in companyInvestors">
            <li class="table__head-item" v-for="(thead) in companyInvestors">
                <div class="table__head-inner" v-for="(item) in thead.th">
                    <span class="table__head-data">{{ item }}</span>
                    <button class="filter-btn" ref="filterBtnRefs">
                        <img src="./../../../img/dashboard/arrows.png" alt="arrows">
                    </button>
                </div>
            </li>
            <li v-for="item in companyInvestor.td" class="table-body__item" :key="item">
                <p v-for="data in item.data" :key="data">
                    {{ data.investmentDate }}
                    {{ data.wallet }}
                    {{ data.userName }}
                    {{ data.investmentSize }}
                    {{ data.dividendsPaid }}
                    {{ data.mainContact }}
                </p>
                <div class="table-body__btns">
                    <button class="table-body__btn">
                        <img src="./../../../img/dashboard/edit2.svg" alt="">
                        Edit
                    </button>
                    <button class="table-body__btn">
                        <img src="./../../../img/dashboard/delete-icon2.svg" alt="">
                        Delete
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .table {
        position: relative;
        background-color: var(--gray-3);
        padding: 40px 8px 8px 8px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .table__head-data {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: var(--black-100);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: .6;
}

.drop-down__label {
    margin-bottom: 3px;
}

.table__head-item {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.table__head-inner {
    display: flex;
    align-items: baseline;
    padding: 8px 12px;
}

.table-body {
    position: relative;
    background-color: var(--White);
    border-radius: 10px;
}

.table-body__item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--f0);
}

.table-body__item p {
    padding: 12px 8px;
    width: 100%;
    max-width: 180px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
}

.table-body__btns {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
}

.table-body__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--c9);
    border-radius: 10px;
    padding: 7px 10px;
    max-height: 28px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    background-color: var(--White);
}

.table-body__btn:nth-child(2) {
    width: 60px;
}

.table-body__item.block {
    background-color: var(--F4E1E1);
}

.table-body__btn.active {
    border: 1px solid var(--red);
}

.table-body__btn {
    display: flex;
    gap: 4px;
}

.table-body__btn:nth-child(1) img {
    transform: translateY(-20%);
}
.table-body__btn:nth-child(2) img {
    transform: translateY(-14%);
}
</style>