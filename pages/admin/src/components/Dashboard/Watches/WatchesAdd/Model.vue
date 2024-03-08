<script setup>
import Input from '../../Input/Input.vue';
</script>

<template>
    <div class="model">
        <h3 class="model__title">
            Model
        </h3>
        <ul class="model__inputs">
            <li class="model__inputs-item">
                <Input label="English" placeholder="Введите" type="text" name="name" />
            </li>
            <li class="model__inputs-item">
                <Input label="Русский" placeholder="Введите" type="text" name="name" />
            </li>
            <li class="model__inputs-item">
                <Input label="Español" placeholder="Введите" type="text" name="name" />
            </li>
            <li class="model__inputs-item">
                <Input label="Chinese" placeholder="Введите" type="text" name="name" />
            </li>
        </ul>
    </div>
</template>

<style>
    .model {
        background-color: var(--f0);
        border-radius: 10px;
        padding: 12px;
    }

    .model__title {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .model {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: var(--Gray-1);
        margin-bottom: 12px;
    }

    .model__inputs {
        display: flex;
        gap: 16px;
    }
    .model__inputs-item {
        flex: 1;
    }

    .model__inputs-item input {
        color: var(--Placeholder-text) !important;
    }
</style>