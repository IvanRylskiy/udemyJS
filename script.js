'use strict';

// //CONDITIONS

// let num = 50;

// if (num < 49) {
//     console.log('False!');
// } else if (num > 100) {
//     console.log('False!');
// } else {
//     console.log('True!');
// }

// (num == 50) ? console.log('True!') : console.log('False!');

// switch (num) {
//     case num < 49: 
//         console.log('False!');
//         break;
//     case num > 100:
//         console.log('False!');
//         break;
//     case num > 80:
//         console.log('False!');
//         break;
//     case 50:
//         console.log('True!');
//         break;
//     default:
//         console.log('Something went wrong!');
//         break;
// }

// //CYCLES

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // } while (num < 55);

// // for (let i = 1; i < 8; i++) {
// //     if (i == 6) {
// //         continue;
// //     }
// //     console.log(i);
// // }

// //FUNCTIONS

// // function showFirstMessage(text) {
// //     alert(text);
// //     let num = 20;
// //     console.log(num);
// // }

// // showFirstMessage('Hello!');
// // console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3, 4));

// console.log(calc(3, 7));

// function retVar() {
//     let some = 50;
//     return some;
// }

// let anotherSome = retVar();

// console.log(anotherSome);

// let stuff = function(a, b) {
//     return (a + b);
// };

// console.log(stuff(3, 5));

// let anotherCalc = (j, c) => j + c;

// console.log(anotherCalc(3, 5));

// let str = 'text';

// console.log(str.length);
// console.log(str.toUpperCase());

// let twelve = '12.2px';

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// //CALLBACK FUNCTIONS

// // function first() {
// //     //doing something
// //     setTimeout( function() {
// //         console.log(1);
// //     }, 500 );
// // }

// // function second() {
// //     console.log(2);
// // }

// // first();
// // second();

// function learnJS(lang, callback) {
//     console.log('I am learning ' + lang + '!');
//     callback();
// }

// function done() {
//     console.log('I am done with 3d lesson!');
// }

// learnJS('JavaScript', done);

// //OBJECTS

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'Name'
// };

// console.log(options.name);

// options.bool = false;
// options.colors = {
//     border: 'black',
//     bg: 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' 
//     + options[key]);
// }

// console.log(Object.keys(options).length);

// //ARRAYS

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push('fifth');
// arr.shift();
// arr.unshift('first');

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

// // let ans = prompt('', ''),
// //     ansArr = [];

// // ansArr = ans.split(',');
// // console.log(ansArr);

// let arrA = ['qwe', 'qwa', 'qwo', 'qwi'],
//     strA;

// strA = arrA.join(', ');
// console.log(strA);

// let arrB = [1, 15, 4],
//     arrC;

// function compareNum(a, b) {
//     return a - b;
// }

// arrC = arrB.sort(compareNum);
// console.log(arrC);

// //Object-oriented programming

// //Объект - самая главная сущность!

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// DOM - document object model (объектная модель документа)

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    container = document.querySelector('.container');

// WORKING WITH DOM ELEMENTS

box.style.backgroundColor = 'blue';

btn[2].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'green';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'red';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'aqua';
}

heart.forEach (function (item, i, arr) {
    item.style.backgroundColor = 'blue';
    console.log('Painting ' + i + ' element in ' + arr);
});

let div = document.createElement('div'),
    text = document.createTextNode('I was here');

div.classList.add('black');

// document.body.appendChild(div);
// container.appendChild(div);

// div.innerHTML = '<h1>BRUH</h1>';
div.textContent = 'BRUH';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
container.removeChild(heart[1]);

document.body.replaceChild(btn[0], circle[0]);

console.log(div);
console.log(text);