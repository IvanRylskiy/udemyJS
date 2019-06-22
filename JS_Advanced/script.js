'use strict';

//JSON - JavaScript object notation

let options = {
    width: '1366px',
    height: '768px',
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.parse(JSON.stringify(options)));

//AJAX - Asynchronous Javascript And Xml

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    inputVndfromusd = document.getElementById('vndfromusd'),
    inputEur = document.getElementById('eur'),
    inputVndfromeur = document.getElementById('vndfromeur');

/* inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send();

    // свойства объекта
    // status - http код ответ от сервера
    // statusText - текстовый ответ от сервера
    // responseText / response - текст ответа сервера
    // readyState - текущее состояние запроса (UNSET, OPENED, HEADERS_RECIEVED, LOADING, DONE)

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputRub.value / data.usd);
            inputVndfromusd.value = (inputUsd.value * data.vndfromusd);
            inputEur.value = (inputRub.value / data.eur);
            inputVndfromeur.value = (inputEur.value * data.vndfromeur);
        } else {
            inputUsd.value = 'Something went wrong!';
            inputVndfromusd.value = 'Something went wrong!';
            inputEur.value = 'Something went wrong!';
            inputVndfromeur.value = 'Something went wrong!';
        }
    });
}); */

//Переделываем с помощью Promise
inputRub.addEventListener('input', () => {
    function catchData() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function () {
                if(request.readyState === 4) {
                    if(request.status == 200) {
                        resolve(this.response);
                    } else {
                        reject();
                    }
                }
            };
        });
    }

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = (inputRub.value / data.usd);
        inputVndfromusd.value = (inputUsd.value * data.vndfromusd);
        inputEur.value = (inputRub.value / data.eur);
        inputVndfromeur.value = (inputEur.value * data.vndfromeur);
    })
    .then(() => console.log(5000))
    .catch(() => {
        inputUsd.value = 'Something went wrong!';
        inputVndfromusd.value = 'Something went wrong!';
        inputEur.value = 'Something went wrong!';
        inputVndfromeur.value = 'Something went wrong!';
    });
});

//Promise

let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 3000);
}

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам дали деньги');
}

function lose() {
    console.log('Вы проиграли');
}

shoot({},
        function(mark) {
            console.log('Вы попали в цель');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            lose();
        }
    );

// Используем Promise

function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });

    return promise;
}

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам дали деньги');
}

function lose() {
    console.log('Вы проиграли');
}

shoot({})
.then(mark => console.log('Вы попали в цель'))
.then(win)
.catch(lose);