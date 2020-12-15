const square = (x) =>{
    return x * x
};

console.log(square(2))

const sum = (x,y) => {
    return x + y;
}

console.log(sum(5,4))

const isEven = (num) =>{
    return num % 2 === 0; 
}
console.log(isEven(3))

const muiltiply = (x,y) => {
    return x * y;
}

console.log(muiltiply(4,5))

// one param 

const sqr = x => {
    return x * x;
}
console.log(sqr(3))

const greet = () => {
    console.log('Hi')
}

console.log(greet())

// implicit 

// const squreRt = n => {
//     return n * n;
// }

// the above as implicit
const timesMe = n =>  n * n


console.log(timesMe(4))

function name(name) {
    console.log(name);
}

console.log(name('Ste'))

// implicit and arrays

const numb = [1,2,3,4,5,6,7,8];

const double = numb.map(function(n){
    return n * 2;
});

console.log(double)

// notmal arrow function

const doubles2 = numb.map(n => {
    
   let total = n * 2;
     total = total + 1;
        return total;
}
)

console.log('doubles2 ' + doubles2)

const isEven2 = numb.map(n => {
    return n % 2 === 0;
})


console.log(isEven2)

// refactoring the above even futher

const isEvens = numb.map((n) => (
    n % 2 === 0 ? 'even' : 'odd'
));

console.log(isEvens)




const doubles3 = numb.map(n => n * 2)

console.log(doubles3)

const myName = 'Rik'

const checkName = myName === 'Ste' ? 'Hello' : "Bugger Off, I've got a bird upstairs"

console.log(checkName)