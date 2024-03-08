<template>
    <div class="popup">
        <slot></slot>
    </div>
</template>

<style>
.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(23, 23, 27, 0.88);
    padding: 10px;
}
</style>