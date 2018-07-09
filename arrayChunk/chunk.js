'use strict';

function arrayChunk(arr, size){
    let chuncked = [];
   for(let elements of arr){
       const last = chuncked[chuncked.length - 1];
       if(!last || last.length === size){
           chuncked.push([elements]);
       }else{
           last.push(elements)
       }

   }

   return chuncked;
}

console.log(arrayChunk([1,2,3,4,5,6,7], 2));

function arrayChunkBySliceMethod(arr, size){
    let chunked =[];
    let index = 0;
    while(index < arr.length){
        chunked.push(arr.slice(index, index+size));
        index += size
    }
    return chunked;
}

console.log(arrayChunkBySliceMethod([1,2,3,4,5,6,7], 2));