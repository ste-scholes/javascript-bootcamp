function multi(x,y) {
    return x * y;
}

console.log(multi(2,5))

// the old way of fixing

function mult(x,y){
    if(typeof y ==='undefined') {
        y = 1;
    }
    return x * y;
}

console.log(mult(5,2))

// turnery operator

function multip(x,y) {
    x = typeof x === 'undefined' ? 1 : x
    y = typeof y === 'undefined' ? 1 : y
    console.log('x = '  + x)
    console.log('y = '+ y )
    return x * y;
}

console.log(multip(2,4))

//ternary

function timeBy(x,y) {
    y = typeof y ==='undefined' ? 1:y
    return x * y;
}

console.log(timeBy(4,8))

// the new way

function multiply(x, y = 1) {
    return x * y
}

console.log(multiply(4,9))

// greet

const greet = (person, greeting = 'Hi') => {
    console.log(`${greeting}, ${person}!`)
};

greet('Ste', );

// array as default

const blah = (x,y = [1,2,3] ) => (
    console.log(x,y)
)

blah(1,2)

const greeting = (person, greeting = 'Hi', punctuation = '!') => (
    console.log(`${greeting}, ${person}${punctuation}`)
);

greeting('Ste','Hello','?')