<script setup>
    import { links } from './../../../../data/sidebarItems';
    import plus from './../../../../img/sidebar/plus.svg'
</script>

<template>
    <div class="sidebar__box" v-for="(link) in links" :key="link.id">
        <button class="sidebar__btn">
            {{ link.title }}
            <img src="./../../../../img/sidebar/arrow.svg" alt="icon">
        </button>
        <ul class="sidebar-list">
            <li class="sidebar-list__item" v-for="(item) in link.btns" :key="item.id">
                <button  :class="item.isActive ? 'sidebar-list__btn active' : 'sidebar-list__btn'">
                    <div class="sidebar__btn-left">
                        <img :src="item.img" alt="icon">
                        {{ item.linkText }}
                    </div>
                    <img :class="!item.isInner ? 'plus disabled' : ''" :src="item.isInner ? plus : ''" alt="icon">
                </button>
            </li>
        </ul>
    </div>
</template>

<style>
    .sidebar__btn {
        max-width: 248px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
    }

    .sidebar-list {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
    }

    .sidebar-list__btn {
        max-width: 264px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 10px 0px 0px 10px;
        gap: 10px;
        font-family: "Azo Sans W01 Medium";
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
    }
    
    .sidebar-list__btn.active {
        max-width: unset;
        background-color: var(--F4EEE1);
        border-right: 2px solid var(--Primary-1);
    }

    .sidebar__btn-left {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .plus.disabled {
        display: none;
    }
</style>