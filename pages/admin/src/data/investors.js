export default class Table {
    constructor(id, th, td) {
        this.id = id;
        this.th = th;
        this.td = td;
    }
}

class Investor {
    constructor(id, isBlocked, data) {
        this.id = id,
        this.isBlocked = isBlocked;
        this.data = data;
    }
}

export const investors = [
    new Table(
        1,
        [
            'ID',
            'Имя',
            'Почта',
            'Статус',
            'Контакты',
            'Инвестор',
            'Остаток (?)',
            'Дата регистрации',
            'Действия'
        ],

        [
            new Investor(
                1,
                false,
                [
                    { id: '55069827' },
                    { name: 'Courtney' },
                    { mail: 'cido@gmail.com' },
                    { status: 'Normal user'},
                    { contacts: '(316) 555-0116' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-06 11:24:08' }
                ]
            ),

            new Investor(
                2,
                false,
                [
                    { id: '76031847' },
                    { name: 'Cameron' },
                    { mail: 'zitka@mail.ru' },
                    { status: 'Normal user'},
                    { contacts: '@D3m0n' },
                    { isInvestor: 'Yes' },
                    { remainder: '$20.00'},
                    { registrationDate: '2020-05-01 06:05:46' }
                ]
            ),

            new Investor(
                3,
                true,
                [
                    { id: '34034474' },
                    { name: 'Leslie' },
                    { mail: 'icadahli@gmail.com' },
                    { status: 'Banned'},
                    { contacts: '@Haz3' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-03 08:14:01' }
                ]
            ),

            new Investor(
                4,
                true,
                [
                    { id: '93242854' },
                    { name: 'Cody' },
                    { mail: 'codence@gmail.com' },
                    { status: 'Banned'},
                    { contacts: '(201) 555-0124' },
                    { isInvestor: 'Yes' },
                    { remainder: '$23.05'},
                    { registrationDate: '2020-05-01 06:05:46' }
                ]
            ),

            new Investor(
                5,
                false,
                [
                    { id: '66538135' },
                    { name: 'Dianne' },
                    { mail: 'lline@yandex.ru' },
                    { status: 'Normal user'},
                    { contacts: '@Vangu4rd' },
                    { isInvestor: 'Yes' },
                    { remainder: '$20.00'},
                    { registrationDate: '2020-05-04 09:18:16' }
                ]
            ),

            new Investor(
                6,
                false,
                [
                    { id: '55700223' },
                    { name: 'Darrell' },
                    { mail: 'seema@gmail.com' },
                    { status: 'Administrator'},
                    { contacts: '@R3ap3r' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-01 06:05:46' }
                ]
            ),

            new Investor(
                7,
                false,
                [
                    { id: '11081197' },
                    { name: 'Arlene' },
                    { mail: 'tinest@mail.ru' },
                    { status: 'Normal user'},
                    { contacts: '(480) 555-0103' },
                    { isInvestor: 'Yes' },
                    { remainder: '$100.00'},
                    { registrationDate: '2020-05-06 11:24:08' }
                ]
            ),

            new Investor(
                8,
                true,
                [
                    { id: '66277431' },
                    { name: 'Marjorie' },
                    { mail: 'osgoodwy@gmail.com' },
                    { status: 'Banned'},
                    { contacts: '@C1ph3r' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-05 10:21:13' }
                ]
            ),

            new Investor(
                9,
                false,
                [
                    { id: '58276066' },
                    { name: 'Esther' },
                    { mail: 'maka@yandex.ru' },
                    { status: 'Normal user'},
                    { contacts: '(207) 555-0119' },
                    { isInvestor: 'Yes' },
                    { remainder: '$25.05'},
                    { registrationDate: '2020-05-06 11:24:08' }
                ]
            ),

            new Investor(
                10,
                false,
                [
                    { id: '01906912' },
                    { name: 'Soham' },
                    { mail: 'ziar@gmail.com' },
                    { status: 'Administrator'},
                    { contacts: '@Cyb3r' },
                    { isInvestor: 'Yes' },
                    { remainder: '$920.00'},
                    { registrationDate: '2020-05-01 06:05:46' }
                ]
            ),

            new Investor(
                11,
                false,
                [
                    { id: '76031847' },
                    { name: 'Aubrey' },
                    { mail: 'fzaaaaa@gmail.com' },
                    {status: 'Normal user'},
                    { contacts: '@3nigma' },
                    { isInvestor: 'Yes' },
                    { remainder: '$21.20'},
                    { registrationDate: '2020-05-03 08:14:01' }
                ]
            ),

            new Investor(
                12,
                false,
                [
                    { id: '34034474' },
                    { name: 'Shane' },
                    { mail: 'redaniel@gmail.com' },
                    {status: 'Normal user'},
                    { contacts: '@Rogu3' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-05 10:21:13' }
                ]
            ),

            new Investor(
                13,
                false,
                [
                    { id: '43397744' },
                    { name: 'Colleen' },
                    { mail: 'warn@mail.ru' },
                    {status: 'Administrator'},
                    { contacts: '(704) 555-0127' },
                    { isInvestor: 'Yes' },
                    { remainder: '$25.05'},
                    { registrationDate: '2020-05-05 10:21:13' }
                ]
            ),

            new Investor(
                14,
                true,
                [
                    { id: '38766940' },
                    { name: 'Victoria' },
                    { mail: 'cedennar@gmail.com' },
                    {status: 'Banned'},
                    { contacts: '@Forge' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-06 11:24:08' }
                ]
            ),

            new Investor(
                15,
                false,
                [
                    { id: '37890606' },
                    { name: 'Darlene' },
                    { mail: 'quasiah@gmail.com' },
                    {status: 'Normal user'},
                    { contacts: '(303) 555-0105' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-03 08:14:01' }
                ]
            ),

            new Investor(
                16,
                false,
                [
                    { id: '52936567' },
                    { name: 'Ronald' },
                    { mail: 'seannand@mail.ru' },
                    {status: 'Normal user'},
                    { contacts: '@N3xus' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-04 09:18:16' }
                ]
            ),

            new Investor(
                17,
                false,
                [
                    { id: '21789057' },
                    { name: 'Gladys' },
                    { mail: 'miyokoto@mail.ru' },
                    {status: 'Administrator'},
                    { contacts: '@Lun4rN1ght' },
                    { isInvestor: 'No' },
                    { remainder: '-'},
                    { registrationDate: '2020-05-02 07:10:15' }
                ]
            ),

            new Investor(
                18,
                false,
                [
                    { id: '43397744' },
                    { name: 'Debra' },
                    { mail: 'hamli@gmail.com' },
                    {status: 'Normal user'},
                    { contacts: '(225) 555-0118' },
                    { isInvestor: 'Yes' },
                    { remainder: '$174.40'},
                    { registrationDate: '2020-05-01 06:05:46' }
                ]
            ),
        ]
    )
]