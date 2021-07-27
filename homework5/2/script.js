'use strict';

const cartItem = {
    render(good) {
        return `<div class="good">
            <div><b>название</b>: ${good.product_name}</div>
            <div><b>цена за единицу</b>: ${good.price}</div>
            <div><b>колличество</b>: ${good.quantity}</div>
            <div><b>стоимость</b>: ${good.quantity * good.price}</div>
        </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
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
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeEnd', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeEnd', 'в корзине ' + this.goods.length + ' позиции стоимостью ' + this.getCartPrice());
        } else {
            this.cartListBlock.textContent = 'корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();