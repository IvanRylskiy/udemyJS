window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadLine = '2019-05-24';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hoursWithoutDays = Math.floor((t / (1000 * 60 * 60))), // if don't use days
            hoursWithDays = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hoursWithoutDays': hoursWithoutDays,
            'hoursWithDays': hoursWithDays,
            'days': days
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            days.textContent = t.days;
            hours.textContent = t.hoursWithDays;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hoursWithDays);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);            
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        btnClose = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    btnClose.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Modal window in tabs

    let globalInfo = document.querySelector('.info');

    globalInfo.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    // Form in modal

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо за заявку! Скоро мы с Вами свяжемся!',
        failure: 'Ошибка! Что-то пошло не так...'
    };

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    let formModal = document.querySelector('.main-form'),
        inputModal = formModal.getElementsByTagName('input');

    formModal.addEventListener('submit', function(event) {
        event.preventDefault();
        formModal.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        let formData = new FormData(formModal);

        request.send(formData);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.textContent = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        });

        for (let i = 0; i < inputModal.length; i++) {
            inputModal[i].value = '';
        }
    });

    // Form

    let form = document.getElementById('form'),
        input = form.getElementsByTagName('input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value,key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.textContent = message.success;
            } else {
                statusMessage.textContent = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});

// Ex. 11, homework

// Выведите на экран правильное сообщение, которое берет значение из input

/* <input id="age" value="30">

let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ['Горький', 'Максим']); */

// Ex. 12, homework

/* Используя синтаксис ES6 в отдельном документе:

· Создать класс options
· Он должен содержать свойства: height, width, bg, fontSize, textAlign
· Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
· Создать новый объект через класс
· Вызвать его метод и получить элемент на странице */

/* class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        elem.style.cssText = param;
    }
}

const item = new Options(300, 350, 'red', 14, 'center');

item.createDiv(); */