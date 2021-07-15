// задание 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - префиксная форма возвращает новое значение
// d = b++; alert(d);           // 1 - постфиксная форма возвращает старое значение
// c = (2+ ++a); alert(c);      // 5 - а было 2 и так как ++а префиксный а = 2 + 1, с = 2 + 3
// d = (2+ b++); alert(d);      // 4 - b++ постфиксная форма, первый раз вернули значение b = 1, второй раз добавили + 1. 
// alert(a);                    // 3 - значение увеличино 2 раза
// alert(b);                    // 3 - значение увеличино 2 раза


// задание 2

// var a = 2;
// var x = 1 + (a *= 2);   а = a * 2
// console.log(x)  x = 5


// задание 3

/* let a = +prompt('введите первое целое число')
let b = +prompt('введите второе целое число')

if (a > 0 && b > 0) {
    let result = a - b
    console.log(result)
} else if (a < 0 && b < 0) {
    let result = a * b
    console.log(result)
} else {
    let result = a + b
    console.log(result)
} */


// задание 4

/* let a = +prompt('введите значение от 0 до 15')

switch (a) {
    case 0:
        console.log(a++)
    case 1:
        console.log(a++)
    case 2:
        console.log(a++)
    case 3:
        console.log(a++)
    case 4:
        console.log(a++)
    case 5:
        console.log(a++)
    case 6:
        console.log(a++)
    case 7:
        console.log(a++)
    case 8:
        console.log(a++)
    case 9:
        console.log(a++)
    case 10:
        console.log(a++)
    case 11:
        console.log(a++)
    case 12:
        console.log(a++)
    case 13:
        console.log(a++)
    case 14:
        console.log(a++)
    case 15:
        console.log(a)
} */


// задание 5

/* function sum(a, b) {
    return a + b
}
console.log(sum(2, 3))

function difference(a, b) {
    return a - b
}
console.log(difference(2, 3))

function multiplication(a, b) {
    return a * b
}
console.log(multiplication(2, 3))

function division(a, b) {
    return a / b
}
console.log(division(2, 3)) */


// задание 6 

/* function sum(a, b) {
    return a + b
}

function difference(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return sum(arg1, arg2)
        case 'разность':
            return difference(arg1, arg2)
        case 'умножение':
            return multiplication(arg1, arg2)
        case 'деление':
            return division(arg1, arg2)
    }
}

console.log(mathOperation(2, 3, 'сложение'))

console.log(mathOperation(2, 3, 'разность'))

console.log(mathOperation(2, 3, 'умножение'))

console.log(mathOperation(2, 3, 'деление')) */


// задание 8

function power(val, pow) {
    if (pow == 1) {
        return val
    } else {
        return val * power(val, pow - 1)
    }
}

console.log(power(3, 5))