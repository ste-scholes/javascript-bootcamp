function sumAll() {
    let total = 0;
    for(let i=0; i < arguments.length; i++)
    {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(5,5,5,5))


// arguments used within function using spread

function sum() {
    const argsArray = [...arguments]
    return argsArray.reduce((total, currVal) => {
        return total + currVal
    })
}

console.log(sum(2,2,2,2,2))

// rest

function sum(...nums) {
   return nums.reduce((total, currVal) => {
       return total + currVal
   })
}

console.log(sum(1,1,1,3,3))

function fullName(first, last, ...titles) {
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
}

console.log(fullName('Tom','Jones','III','Order of the Pheonix'))

const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)

console.log(multiply(5,5))