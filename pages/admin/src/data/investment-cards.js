class InvestmentCard {
    constructor(price, text) {
        this.price = price;
        this.text = text;
    }
}

export const investmentCards = [
    new InvestmentCard('$328.85', 'Сумма инвестиций'),
    new InvestmentCard('$710.68', 'Кол-во вложенных денег'),
    new InvestmentCard('$710.68', 'Свободные средства'),
    new InvestmentCard('$943.65', 'Выручка'),
    new InvestmentCard('$328.85', 'Прибыль'),
    new InvestmentCard('$328.85', 'Процент прибыли'),
    new InvestmentCard('$328.85', 'Средства на выплату'),
]