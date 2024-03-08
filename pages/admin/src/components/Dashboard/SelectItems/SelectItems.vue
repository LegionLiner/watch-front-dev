<script setup>
    import { computed, ref, reactive } from 'vue';
    const props = defineProps({
        class: String,
        items: Array
    });
    const emits = defineEmits(['close', 'choose-item'])
    const query = ref('');

    const items = computed(() => {
        console.log('items');
        if (query) {
            
        }
        return props.items
    })
    function choose(item) {
        emits('close');
        emits('choose-item', item);
    }
</script>

<template>
    <div :class="class">
        <div class="select-items__input">
            <img src="./../../../img/dashboard/search-icon.png" alt="icon">
            <input type="text" placeholder="Search" v-model="query">
        </div>
        <ul class="select-items__options">
            <li v-for="item in items" class="select-items__item" @click="choose(item)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<style>
    .select-items {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--White);
        border-radius: 10px;
        border-radius: 10px;
        border: 1px solid var(--c9);
        box-shadow: 0px 0px 0px 3px rgba(24, 24, 24, 0.08);
        visibility: hidden;
        opacity: 0;
        transition: .3s ease-out;
        z-index: 1;
    }

    .select-items.active {
        opacity: unset;
        visibility: unset;
    }

    .select-items__options {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        background-color: var(--White);
        overflow-y: auto;
        max-height: 184px;
        padding: 6px;
        border-radius: 0 0 10px 10px;
    }
    .select-items__item {
        padding: 4px 6px;
        cursor: pointer;
        border-radius: 6px;
    }
    .select-items__item:hover {
        background: #F0F0F0;
    }

    .select-items__options::-webkit-scrollbar {
        width: 8px;
    }

    .select-items__options::-webkit-scrollbar-thumb {
        background-color: var(--f0);
    }

    .select-items__options button {
        width: 100%;
        text-align: left;
        transition: .3s ease-out;
        padding: 6px;
        border-radius: 6px;
    }

    .select-items__options button:hover {
        background-color: var(--f0);
    }

    .select-items__input {
        display: flex;
        align-items: center;
        padding: 12px;
        box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
        border-bottom: 1px solid var(--f0);
    }

    .select-items__input input {
        width: 100%;
        border: none !important;
        box-shadow: none !important;
    }
</style>