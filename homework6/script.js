"use strict";

//    Объект каталога товаров

const catalog = {
    catalogBlock: null,
    cart: null,
    list: [
        {
            id_product: 234,
            product_name: 'телевизор',
            price: 35000,
        },
        {
            id_product: 111,
            product_name: 'смартфон',
            price: 12000,
        },
        {
            id_product: 657,
            product_name: 'пылесос',
            price: 5000,
        }
    ],

    //  Инициальзация каталога.

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    // Рендер каталога

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    //  Добавляем обработку событий

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    //  Метод добавления в корзину

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === id_product);
        this.cart.addToBasket(productToAdd);
    },


    //   Метод получения количества товаров в каталоге

    getCatalogListLength() {
        return this.list.length;
    },

    //  Рендер списка товаров

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },


    //   Рендер отдельного товара из списка

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
    },


    //   Рендер пустого каталога

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст.';
    },
};

//  Объект корзины

const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    //  Метод инициальзации корзины

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    //  Метод установки обработчиков событий

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    //  Метод очистки корзины

    dropCart() {
        this.goods = [];
        this.render();
    },

    //  Рендер корзины

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    //  Добавить товар

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    //  Получение количества товаров в корзине

    getCartGoodsLength() {
        return this.goods.length;
    },

    //  Рендер пустой корзины

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    //  Рендер списка товаров в корзине

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    //  Рендер отдельного товара в корзине

    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} рублей</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

//  Подключение каталога и корзины

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
