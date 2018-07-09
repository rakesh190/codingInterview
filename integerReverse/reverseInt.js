'use strict';

function reverseIntByReverseMethod(integer){
    const reversed = parseInt(integer.toString().split('').reverse().join(''));
    if(integer < 0){
        return reversed * -1;
    }else{
        return reversed;
    }
}

console.log(reverseIntByReverseMethod(-21));

function reverseIntBySignMethod(integer){
    const reversed = parseInt(integer.toString().split('').reverse().join(''));
    return reversed * Math.sign(integer);
}

console.log(reverseIntBySignMethod(13));