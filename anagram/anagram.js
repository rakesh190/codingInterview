'use strict';

function checkAnagram(stringA, stringB) {
   let ACharMap = getCharMap(stringA);
   let BCharMap = getCharMap(stringB);
   console.log(ACharMap);
   if(Object.keys(ACharMap).length !== Object.keys(BCharMap).length){
       return false
   }

   for(let char in ACharMap){
       if(ACharMap.hasOwnProperty(char)){
           if(ACharMap[char] !== BCharMap[char]){
               return false
           }
       }

   }
    return true;

}

function getCharMap(string){
    let charMap = {};
    for(let char of string.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char]+1 || 1;
    }
    return charMap
}

console.log(checkAnagram('hi hello', 'lleho ih'));


function checkAnagramBySortMethod(stringA, stringB){
    let cleanSortedStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    let cleanSortedStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    console.log(cleanSortedStringA);
    console.log(cleanSortedStringB);
    return cleanSortedStringA === cleanSortedStringB;

}

console.log(checkAnagramBySortMethod('hi hello', 'lleho ih'));