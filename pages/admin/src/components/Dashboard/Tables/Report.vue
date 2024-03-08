<script setup>
    import {reportList} from './../../../data/report'
</script>

<template>
    <div class="table">
        <ul class="table-body" v-for="(report) in reportList">
            <li class="table__head-item" v-for="(thead) in reportList" :key="thead.id">
                <div class="table__head-inner" v-for="(item) in thead.th">
                    <span class="table__head-data">{{ item }}</span>
                    <button class="filter-btn" ref="filterBtnRefs">
                        <img src="./../../../img/dashboard/arrows.png" alt="arrows">
                    </button>
                </div>
            </li>
            <li v-for="(item) in report.td" class="table-body__item" :key="item.id">
                <p v-for="(data, i) in item.data">
                    {{ data.number }}
                    {{ data.brand }}
                    {{ data.model }}
                    {{ data.state }}
                    {{ data.purchasePrice }}
                    {{ data.purchaseDate }}
                    {{ data.sellingPrice }}
                    {{ data.saleDate }}
                    {{ data.companyProfit }}
                    {{ data.profitPercent }}
                    {{ data.investorProfit }}
                    {{ data.exposurePeriod }}
                    {{ data.location}}
                </p>
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

.tooltip.active {
    opacity: unset;
    visibility: unset;
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

.table-body__item p:nth-child(1) {
    max-width: 80px;
}
.table-body__item p:nth-child(3) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.table-body__item p:nth-child(6) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.table-body__item p:nth-child(8) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.table-body__item p:nth-child(13) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
    padding: 12px 10px;
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
</style>