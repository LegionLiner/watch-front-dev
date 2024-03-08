import img from './../img/dashboard/circle-img.png'

class Human {
    constructor(skill, img, name, contact) {
        this.skill = skill;
        this.img = img;
        this.name = name;
        this.contact = contact;
    }
}

export const humanList = [
    new Human(
        'Продавец',
        img,
        'Имя',
        'Контакт'
    ),

    new Human(
        'Покупатель',
        img,
        'Имя',
        'Контакт'
    ),
]