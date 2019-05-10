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