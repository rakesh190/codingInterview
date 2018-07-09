'use strict';

function checkPalindromeByReverseMethod(string){
    let reverseString = string
        .split('')
        .reverse()
        .join('');

    return string === reverseString;

}

console.log(checkPalindromeByReverseMethod('appa'));

function checkPalindromeByForLoop(string){
    let reverseString = '';
    for(let i of string){
        reverseString = i +reverseString;
    }
    return string === reverseString;

}

console.log(checkPalindromeByForLoop('appa'));

// function checkPalindromeByReduceMethod(string){
//     return string.split('').reduce((reversed, char)=>{
//         let reverseString = char+reversed;
//         console.log(reverseString)
//         return string === reverseString
//     }, '');
// }
//
// console.log(checkPalindromeByReduceMethod('appa'));

//check every() method documentation
function palidromeByEverymethod(string){
   return string.split('').every((char, index)=> {
        return char === string[string.length - index -1];
    });
}

console.log(palidromeByEverymethod('appa'));