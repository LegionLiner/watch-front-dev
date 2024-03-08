<template>
    <div class="main-dashboard">
        <slot></slot>
    </div>
</template>

<style>
    .main-dashboard {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 20px;
        background-color: #F4EEE1;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>