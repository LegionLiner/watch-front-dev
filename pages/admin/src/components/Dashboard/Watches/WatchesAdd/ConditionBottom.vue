<script setup>
import Input from '../../Input/Input.vue';
</script>

<template>
    <ul class="condition-bottom">
        <li class="condition-bottom__item">
            <Input label="Watch_type:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Current nft address:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Contract of sale nft:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Token id nft:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Metadata nft:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Holder fees percent nft:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Transfer fee percent nft:" placeholder="Введите" />
        </li>
        <li class="condition-bottom__item">
            <Input label="Listing bidding cancellation nft:" placeholder="Введите" />
        </li>
    </ul>
</template>

<style>
    .condition-bottom {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }

    .condition-bottom__item input {
        color: var(--Placeholder-text);
    }
</style>