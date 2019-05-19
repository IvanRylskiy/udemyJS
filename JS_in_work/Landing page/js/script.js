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
});

// Ex. 11, homework

// Выведите на экран правильное сообщение, которое берет значение из input

/* <input id="age" value="30">

let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ['Горький', 'Максим']); */