'use strict';

function reverseAStringByMethod(string){
    return string
        .split('')
        .reverse()
        .join('');
}
console.log(reverseAStringByMethod('apple')); // elppa

function reverseStringByForLoop(string){
    let reversedString = '';
    for(let i of string){
        reversedString = i + reversedString;
    }
    return reversedString;
}

console.log(reverseStringByForLoop('rakesh'));

// function reverseAStringByReduceMethod(string){
//      string.split('').reduce((reversed, char)=> {
//         return char+reversed;
//     }, '');
// }
//
// console.log(reverseAStringByReduceMethod('santhos'));