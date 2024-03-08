import img from './../img/dashboard/collections/watch-big.png'

class Order {
    constructor(totalPrice, deliveryPrice, deliveryTime, orderedProducst) {
        this.totalPrice = totalPrice;
        this.deliveryPrice = deliveryPrice;
        this.deliveryTime = deliveryTime;
        this.orderedProducst = orderedProducst
    }
}

class OrderedProduct {
    constructor(img, launchYear, name, price) {
        this.img = img;
        this.launchYear = launchYear;
        this.name = name;
        this.price = price;
    }
}

export const order = new Order(
    '1,660.00',
    '$0.00',
    '5-7 дней',
    [
        new OrderedProduct(
            img,
            '2023',
            'Royal Oak Selfwinding Flying Tourbillon',
            'USD 420 000'
        ),
        new OrderedProduct(
            img,
            '2023',
            'Royal Oak Selfwinding Flying Tourbillon',
            'USD 420 000'
        ),
        new OrderedProduct(
            img,
            '2023',
            'Royal Oak Selfwinding Flying Tourbillon',
            'USD 420 000'
        ),
        new OrderedProduct(
            img,
            '2023',
            'Royal Oak Selfwinding Flying Tourbillon',
            'USD 420 000'
        ),
        new OrderedProduct(
            img,
            '2023',
            'Royal Oak Selfwinding Flying Tourbillon',
            'USD 420 000'
        ),
        new OrderedProduct(
            img,
            '2023',
            'Royal Oak Selfwinding Flying Tourbillon',
            'USD 420 000'
        ),
    ]
)