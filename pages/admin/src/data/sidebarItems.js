import img from './../img/sidebar/review.svg';
import img2 from './../img/sidebar/texts.svg';
import img3 from './../img/sidebar/options.svg';
import img4 from './../img/sidebar/user.svg';
import img5 from './../img/sidebar/watch.svg';
import img6 from './../img/sidebar/gem.svg';
import img7 from './../img/sidebar/bag.svg';
import img8 from './../img/sidebar/building.svg';
import img9 from './../img/sidebar/box.svg';
import img10 from './../img/sidebar/chart.svg';
import img11 from './../img/sidebar/chart-info.svg';

class SidebarBtns {
    constructor(id, title, btns) {
        this.id = id;
        this.title = title;
        this.btns = btns;
    }
}

class SidebarBtn {
    constructor(id, isActive, isInner, img, linkText) {
        this.id = id;
        this.isActive = isActive;
        this.isInner = isInner;
        this.img = img;
        this.linkText = linkText;
    }
}

export const links = [
    new SidebarBtns(
        1,
        'Основное',
        [
            new SidebarBtn(
                1,
                true,
                false,
                img,
                'Обзор'
            ),
            new SidebarBtn(
                2,
                false,
                false,
                img2,
                'Тексты'
            ),
            new SidebarBtn(
                3,
                false,
                false,
                img3,
                'Настройки проекта'
            )
        ]
    ),
    new SidebarBtns(
        2,
        'Данные',
        [
            new SidebarBtn(
                4,
                false,
                false,
                img4,
                'Пользователи'
            ),
            new SidebarBtn(
                5,
                false,
                false,
                img4,
                'Бренды'
            ),
            new SidebarBtn(
                3,
                false,
                false,
                img5,
                'Колекции'
            )
        ]
    ),
    new SidebarBtns(
        3,
        'Товары',
        [
            new SidebarBtn(
                4,
                false,
                true,
                img5,
                'Часы'
            ),
            new SidebarBtn(
                5,
                false,
                true,
                img5,
                'Часы компании'
            ),
            new SidebarBtn(
                3,
                false,
                true,
                img6,
                'Ювелирные изделия'
            ),
            new SidebarBtn(
                3,
                false,
                true,
                img7,
                'Аксессуары'
            ),
        ]
    ),
    new SidebarBtns(
        2,
        'Инвестиции',
        [
            new SidebarBtn(
                4,
                false,
                false,
                img8,
                'В компанию'
            ),
            new SidebarBtn(
                5,
                false,
                false,
                img9,
                'В товары'
            )
        ]
    ),
    new SidebarBtns(
        2,
        'Финансы',
        [
            new SidebarBtn(
                4,
                false,
                false,
                img10,
                'Продажи'
            ),
            new SidebarBtn(
                5,
                false,
                false,
                img11,
                'Отчетность'
            )
        ]
    ),
]