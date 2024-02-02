"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser({ name, age }) {
    const user = {
        name,
        age,
        id: (0, uuid_1.v4)(),
        cart: []
    };
    return user;
}
function createItem({ name, price, description }) {
    const item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return item;
}
function addToCart(user, item) {
    user.cart.push(item);
}
function removeFromCart(user, item) {
    user.cart = user.cart.filter((i) => i.id !== item.id);
}
function removeQuantityFromCart(user, item, qty) {
    let i = 0;
    while (i < qty) { }
}
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
function printCart(user) {
    for (let item of user.cart) {
        console.log(item.name);
    }
}
const user = createUser({ name: "Kadeeja Griffin", age: 27 });
const comforter = createItem({ name: "Comforter", price: 80.00, description: "Olive green comforter, fluffy, and comofrtable" });
const pillows = createItem({ name: "Pillows", price: 40.00, description: "Fluffy pillows, great for neck stability and comfortability" });
const sheets = createItem({ name: "Sheets", price: 25.00, description: "Soft plush sheets, that can garuntee and beautiful nights sleep" });
addToCart(user, comforter);
addToCart(user, comforter);
addToCart(user, comforter);
printCart(user);
console.log(cartTotal(user));
addToCart(user, pillows);
printCart(user);
console.log(cartTotal(user));
addToCart(user, sheets);
printCart(user);
console.log(cartTotal(user));
removeFromCart(user, comforter);
printCart(user);
console.log(cartTotal(user), "removed conforter");
console.log(removeQuantityFromCart(user, comforter, 1), "here");
console.log(cartTotal(user));
