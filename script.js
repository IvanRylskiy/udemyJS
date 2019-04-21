'use strict';

//CONDITIONS

let num = 50;

if (num < 49) {
    console.log('False!');
} else if (num > 100) {
    console.log('False!');
} else {
    console.log('True!');
}

(num == 50) ? console.log('True!') : console.log('False!');

switch (num) {
    case num < 49: 
        console.log('False!');
        break;
    case num > 100:
        console.log('False!');
        break;
    case num > 80:
        console.log('False!');
        break;
    case 50:
        console.log('True!');
        break;
    default:
        console.log('Something went wrong!');
        break;
}

//CYCLES

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

//FUNCTIONS

// function showFirstMessage (text) {
//     alert(text);
//     let num = 20;
//     console.log(num);
// }

// showFirstMessage('Hello!');
// console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 4));

console.log(calc(3, 7));

function retVar() {
    let some = 50;
    return some;
}

let anotherSome = retVar();

console.log(anotherSome);

let stuff = function(a, b) {
    return (a + b);
};

console.log(stuff(3, 5));

let anotherCalc = (j, c) => j + c;

console.log(anotherCalc(3, 5));

let str = 'text';

console.log(str.length);
console.log(str.toUpperCase());

let twelve = '12.2px';

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

//CALLBACK FUNCTIONS

// function first () {
//     //doing something
//     setTimeout( function() {
//         console.log(1);
//     }, 500 );
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

function learnJS (lang, callback) {
    console.log('I am learning ' + lang + '!');
    callback();
}

function done () {
    console.log('I am done with 3d lesson!');
}

learnJS('JavaScript', done);

//OBJECTS

let options = {
    width: 1024,
    height: 1024,
    name: 'Name'
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' 
    + options[key]);
}

console.log(Object.keys(options).length);