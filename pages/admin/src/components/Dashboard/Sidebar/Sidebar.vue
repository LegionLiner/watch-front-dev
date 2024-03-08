<script setup>
import SidebarItems from './SidebarItems/SidebarItems.vue';
</script>

<template>
    <aside class="sidebar">
        <nav class="sidebar__nav">
            <SidebarItems />
        </nav>
    </aside>
</template>

<style>
    .sidebar {
        max-width: 300px;
        padding: 20px 0 20px 20px;
        overflow-y: auto;
        flex: 1;
        background: white;
    }

    .sidebar__nav {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
    }
</style>