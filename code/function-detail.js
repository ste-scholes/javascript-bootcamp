console.log('Hello')


// if(true){
//     let animal = 'eel'
// }

// console.log(animal)

let i = 10
i = 11

console.log(i)

// [1,2,3]
// [2,5,10]
function doubleArr(arr) {
    const result=[];
    for (let num of arr) {
        let double = num * 2;
        result.push(double)
    }
   return result
}

console.log(doubleArr([1,2,3]))

// lexicon scope

function outer(){
    let movie = 'Star Wars';

    function inner() {
        console.log(movie.toUpperCase())
    }
    inner()
}

console.log(outer())

// another example using variables declared outside and inside

function out() {
    let movie = 'Ghostbusters'

    function inside() {
        let movie = 'Balzing Saddles'
        console.log(movie.toUpperCase())

    }
    inside()
}
console.log(out())