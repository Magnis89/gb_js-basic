'use strict'

// задание 1

/* function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');
        return {};
    }

    return {
        firstDigit: num % 10,
        secondDigit: Math.floor(num / 10) % 10,
        thirdDigit: Math.floor(num / 100),
    };
}

console.log(getDigitsOfNumber(356)); */


// задание 2

const basket = {
    goods: [
        {
            id_product: 234,
            product_name: 'телевизор',
            price: 35000,
            quantity: 1
        },
        {
            id_product: 111,
            product_name: 'смартфон',
            price: 12000,
            quantity: 2
        },
        {
            id_product: 657,
            product_name: 'пылесос',
            price: 5000,
            quantity: 3
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    },
};

console.log(basket.countBasketPrice());