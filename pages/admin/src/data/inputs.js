class InputBox {
    constructor(id, title, inputs) {
        this.id = id;
        this.title = title;
        this.inputs = inputs;
    }
}

export const inputs = [
    new InputBox(
        1,
        'Название',
        [
            'English',
            'Русский',
            'Español',
            'Chinese'
        ]
    ),

    new InputBox(
        1,
        'Описание',
        [
            'English',
            'Русский',
            'Español',
            'Chinese'
        ]
    ),
]