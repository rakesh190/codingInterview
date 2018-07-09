'use strict';

function maxChar(string){
    let charMap = {};
    for(let char of string){
        charMap[char] = charMap[char] + 1 || 1; // if chars[char] is null then that is the first occurance
        // if(charMap[char]){
        //     charMap[char]++
        // }else{
        //     charMap[char]===1;
        // }
    }
    console.log(charMap);
    let max = 0;
    let maxChar = '';
    for(let i in charMap){
        if(charMap.hasOwnProperty(i)){
            if(charMap[i] > max){
                max = charMap[i];
                maxChar = i;
            }
        }

    }
    return maxChar;
}

console.log(maxChar('aaddddddddddddeeeeee'));