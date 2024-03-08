<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            headers: ["Цена", "Цена инвестирования", "Бренд", "Дата", "Действия"]
        }
    },
})
</script>

<template>
    <div class="watches-table">
        <div class="table__head">
            <div class="table__start">
                <div class="table__checkbox">
                    <input type="checkbox">
                </div>
                <div class="table__item">
                    Фото
                </div>
                <div class="table__item">
                    Имя
                </div>
            </div>
            <div class="table__item" v-for="header in headers">
                {{ header }}
            </div>
        </div>
        <div class="table__body">
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="table__body-row">
                <div class="table__start">
                    <div class="table__checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="table__item">
                        <img class="table__item-img" src="./../../../img/dashboard/table-img.jpg" alt="icon">
                    </div>
                    <div class="table__item">
                        Courtney
                    </div>
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    $920.00
                </div>
                <div class="table__item">
                    Normal user
                </div>
                <div class="table__item">
                    2020-05-06 11:24:08
                </div>
                <div class="table__item">
                    <div class="table__item-btns">
                        <button>
                            <img src="./../../../img/dashboard/edit2.svg" alt="icon">
                            Edit
                        </button>
                        <button>
                            <img src="./../../../img/dashboard/delete-icon2.svg" alt="icon">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.watches-table {
    background-color: rgba(247, 247, 247, 1);
    padding: 8px;
    border-radius: 10px;
}

.table__head {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
}

.table__start {
    display: flex;
    align-items: center;
}

.table__item {
    display: flex;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    padding: 12px 8px;
    color: var(--black-100);
}

.table__checkbox {
    padding: 12px 8px;
    cursor: pointer;
}

.table__checkbox input {
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    display: block;
    width: 16px;
    height: 16px;
    background-color: rgba(201, 201, 201, 1);
    border-radius: 4px;
    transition: .1s ease-out;
    cursor: pointer;
}

.table__checkbox input::after {
    position: absolute;
    width: 11px;
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background-image: url('./../../../img/dashboard/checked-icon.svg');
    opacity: 0;
    transition: .1s ease-out;
}

.table__checkbox input:checked {
    background-color: rgba(189, 149, 66, 1);
}

.table__checkbox input:checked::after {
    opacity: unset;
}

.table__body {
    background-color: white;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    padding: 0 8px 8px 8px;
    border-radius: 10px;
}

.table__body-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
}

.table__item-img {
    width: 30px;
    height: 30px;
}

.table__item-btns {
    display: flex;
    align-items: center;
    gap: 4px;
}

.table__item-btns button {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 12px 10px;
    background-color: white;
    box-shadow: 0px 2px 8px -4px rgba(24, 24, 24, 0.16);
    border: 1px solid var(--c9);
    max-height: 28px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 500;
    line-height: 84%;
}
</style>