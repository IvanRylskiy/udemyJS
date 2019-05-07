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