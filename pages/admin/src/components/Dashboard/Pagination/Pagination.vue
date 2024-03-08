<template>
    <div class="pagination">
        <a href="#" class="pagination__link">
            <img src="./../../../img/dashboard/arrow-left.png" alt="icon">
        </a>
        <ul class="pagination__pages">
            <li class="pagination__pages-item active">
                <a class="pagination__pages-link" href="#">
                    1
                </a>
            </li>
            <li class="pagination__pages-item">
                <a class="pagination__pages-link" href="#">
                    2
                </a>
            </li>
            <li class="pagination__pages-item">
                <a class="pagination__pages-link" href="#">
                    3
                </a>
            </li>
            <li class="pagination__pages-item">
                <a class="pagination__pages-link" href="#">
                    4
                </a>
            </li>
            <li class="pagination__pages-item">
                <a class="pagination__pages-link" href="#">
                    5
                </a>
            </li>
            <li class="pagination__pages-item dots">
                ...
            </li>
            <li class="pagination__pages-item">
                <a class="pagination__pages-link" href="#">
                    10
                </a>
            </li>
        </ul>
        <a href="#" class="pagination__link">
            <img src="./../../../img/dashboard/arrow-right.png" alt="icon">
        </a>
    </div>
</template>

<style>
    .pagination {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .pagination__pages {
        display: flex;
        gap: 4px;
    }

    .pagination__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        font-size: 0;
        border-radius: 50%;
        background-color: var(--White);
    }

    .pagination__pages-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--White);
    }

    .pagination__pages-link {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        color: var(--black-100);
        transform: translateY(10%);
    }

    .pagination__pages-item.active {
        background-color: var(--Primary-1);
    }

    .pagination__pages-item.active a {
        color: var(--White);
    }

    .dots {
        background-color: unset;
        color: var(--black-100);
        opacity: 0.4;
    }
</style>