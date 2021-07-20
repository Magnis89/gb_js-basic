// задание 1

/* function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

showPrimes(100)
 */


// задание 2-3

/* let basket = [
    ['телевизор', 35000, 1],
    ['смартфон', 12000, 2],
    ['пылесос', 5000, 3],
];


function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i][1] * basket[i][2];
    }
    return totalPrice;
}

console.log(countBasketPrice(basket)); */


// задание 4

/* for (let i = 0; i < 10; console.log(i++)) {

} */


// задание 5

let pypamid = 'x'
console.log(pypamid)
for (let i = 0; i <= 20; i++) {
    pypamid += 'x'
    console.log(pypamid)
}