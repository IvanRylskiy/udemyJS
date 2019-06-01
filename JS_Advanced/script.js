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