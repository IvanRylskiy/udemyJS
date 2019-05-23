'use strict';

//Timeout & Interval

// setTimeout(func, delay);

// function sayHello() {
//     console.log('Hello');
// }

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearInterval(timerId);

// рекурсивный вызов setTimeout

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.elem');

function myAnimation () {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame () {
        if (pos == 200) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// Делегирование событий

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Wassup');
    }
});

// event.target.tagName == 'BUTTON'
// event.target.classList.contains('first')

//Параметры документа, окна и работа с ними

let textBox = document.querySelector('.text-box'),
    btnTextBox = document.querySelector('.btn-text-box');

let width = textBox.clientWidth,
    height = textBox.clientHeight;

console.log(width);
console.log(height);

btnTextBox.addEventListener('click', function() {
    // textBox.style.height = textBox.scrollHeight + 'px';
    textBox.scrollTop = 0;
});

console.log(textBox.getBoundingClientRect());
console.log(textBox.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

scrollBy(0, 200); // переместиться на 200 по игрику
scrollTo(0, 200); // переместиться в 200 по игрику

//Конструкторы и классы

// ES5

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello, ' + this.name + '!');
    };
}
User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' вышел');
};

let ivan = new User('Ivan', 24),
    alex = new User('Alex', 25);

console.log(ivan);
console.log(alex);

ivan.exit();

// ES6

class UserES6 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}!`);
    }
    exit() {
        console.log(`User ${this.name} left`);
    }
}

let ivanes6 = new UserES6('Ivan', 24),
    alexes6 = new UserES6('Alex', 25);

console.log(ivanes6);
console.log(alexes6);

ivanes6.exit();

//This - контекст вызова

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);
showThis(5, 5);

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

console.log(sayName.call(user, 'Doe'));
console.log(sayName.apply(user, ['Snow'])); // несколько аргументов

function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));

let btnThis = document.querySelector('.btn-this');

btnThis.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});

// 1) Просто вызов функции - window/undefind
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind

//ES6 Интерполяция

let nameES6 = 'Ivan',
    ageES6 = 30,
    mailES6 = 'ex@mail.com';

document.write(`Пользователю ${nameES6} ${ageES6}. Его почтовый адрес: ${mailES6}.`);