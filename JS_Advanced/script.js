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

inputRub.addEventListener('input', () => {
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
});