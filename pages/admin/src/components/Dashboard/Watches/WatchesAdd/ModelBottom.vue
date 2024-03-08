<script setup>
import Input from '../../Input/Input.vue';
</script>

<template>
    <ul class="model-bottom">
        <li class="model-bottom__item">
            <div class="model-bottom__input">
                <Input label="Purchase price:" placeholder="Введите" type="text" name="text" />
            </div>
            <div class="model-bottom__input">
                <Input label="Investment price:" placeholder="Введите" type="text" name="text" />
            </div>
            <div class="model-bottom__input">
                <Input label="Currency:" placeholder="Введите" type="text" name="text" />
            </div>
            <div class="model-bottom__input">
                <Input label="Reference:" placeholder="Введите" type="text" name="text" />
            </div>
        </li>
        <li class="model-bottom__item">
            <div class="model-bottom__input">
                <Input label="Power reserve:" placeholder="Введите" type="text" name="text" />
            </div>
            <div class="model-bottom__input">
                <Input label="Caliber:" placeholder="Введите" type="text" name="text" />
            </div>
        </li>
    </ul>
</template>

<style>
    .model-bottom {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }

    .model-bottom__item {
        display: flex;
        gap: 16px;
    }

    .model-bottom__input {
        flex: 1;
    }

    .model-bottom__input input {
        color: var(--Placeholder-text);
    }
</style>