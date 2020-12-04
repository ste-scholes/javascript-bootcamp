 function isPangram(arr, alpha) {
     words = 0;
     alphabet = 0;
     for(i = 0; i < arr.length; i++) {
         words = arr[i]
     }
     for(i = 0; i < alpha.length; i++) {
         alphabet = alpha[i]
     }
    if(words == alphabet) {
        return true;
    }
 }


const arr = ['the', 'five' ,'boxing' ,'wizards' ,'jump' ,'qickly'];

const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



 console.log(isPangram('arr','alpha'))

 // answer

 function pangram(sentence) {
     let lowerCased = sentence.toLowerCase();
     for (let char of 'abcdefghijklmnopqsrtuvwxyz') {
         if(lowerCased.indexOf(char) === -1) {
             return false
         }
     }
     return true;
 }

 console.log(pangram('The five boxing wizards jump quickly'))

 // includes not IE

 function pangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqsrtuvwxyz') {
        if(!lowerCased.includes(char)) {
            return false
        }
    }
    return true;
}

console.log(pangram('The five boxing wizards jump quickly'))