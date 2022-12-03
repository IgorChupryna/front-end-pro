'use strict'

function Hamburger(size) {
    this.size = size;
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}

Hamburger.SIZE_MIDLE = {
    price: 75,
    callories: 30,
}

Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
}

Hamburger.TOPPING_SALAD = {
    price: 20,
    callories: 5,
}

Hamburger.TOPPING_FLAVORING = {
    price: 15,
    callories: 0,
}

Hamburger.prototype.addTopping = function (topping) {
    this.size.price += topping.price;
    this.size.callories += topping.callories;
}

Hamburger.prototype.getPrice = function () {
    return this.size.price;
}

Hamburger.prototype.getCallories = function () {
    return this.size.callories;
}

Hamburger.prototype.addToppings = function (toppingArr) {
    for (let i = 0; i < toppingArr.length; i++) {
        this.size.price += toppingArr[i].price;
        this.size.callories += toppingArr[i].callories;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_MIDLE);

hamburger.addTopping(Hamburger.TOPPING_FLAVORING);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);


const hamburger2 = new Hamburger(Hamburger.SIZE_BIG);
hamburger2.addToppings([Hamburger.TOPPING_CHEESE, Hamburger.TOPPING_SALAD, Hamburger.TOPPING_FLAVORING]);

showPriceAndCallories(hamburger);
showPriceAndCallories(hamburger2);

function showPriceAndCallories(hamburger) {
    const res = `Price with sauce: ${hamburger.getPrice()}\nCallories with sauce: ${hamburger.getCallories()}`
    console.log(res);
}