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

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

//Задачи на понимание основ JS
// console.log([] + false - null + true);

// let y = 1; 
// let x = y = 2; 
// console.log(x);

// console.log([] + 1 + 2);

// console.log("1"[0]);

// console.log(2 && 1 && null && 0 && undefined);

// let a = 1, b = 1;
// console.log(!!( a && b ));
// console.log(a && b);

// console.log(null || 2 && 3 || 4);

// console.log(+"Infinity");

// console.log(0 || "" || 2 || undefined || true || false);