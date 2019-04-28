'use strict';

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    liElement = document.createElement('li'),
    bodyElement = document.querySelector('body'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    usersAnswer = document.querySelector('#prompt');

// 1st

menu.insertBefore(menuItem[2], menuItem[1]);

liElement.classList.add('menu-item');
liElement.textContent = 'Пятый пункт';
menu.appendChild(liElement);

// 2nd

bodyElement.style.background = 'url(img/apple_true.jpg) center no-repeat';

// 3d

title.textContent = 'Мы продаем только подлинную технику Apple';

// 4th

adv.remove();

// 5th

let usersOpinion = prompt('Каково ваше отношение к технике Apple?', '');

usersAnswer.textContent = usersOpinion;