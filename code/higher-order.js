function callThreeTimes(f) {
    f();
    f();
    f();

}

function cry() {
    console.log('Boo Hoo I am so sad');
}

function rage(){
    console.log("I hate everything")
}

cry();

callThreeTimes(rage)

// repeat n times

function repeatNtimes(action, num) {
    for( let i=0; i < num; i++) {
        action();
    
    }
}

repeatNtimes(rage, 3)

// random

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

pickOne(cry, rage)

// returning function

// const triple = multiplyBy(3);

// const double = multiplyBY(2);

function multiplyBy(num){
    return function(x) {
        return x * num;

    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const half = multiplyBy(0.5)

console.log(half(10))

// make beteen function
// checks if valueinput is between two numbers

// example 1


function makeBetweenFunc(x,y) {
    return function(num) {
        if( num >= x && num <= y) {
        return true;
    } else {
       console.log('False');
    }
} 
}

const isChild = makeBetweenFunc(0,18)
console.log('is child ' + isChild(19))

// example 2 short version

function makeBetween(x,y) {
    return function(num) {
        return num >= x && num <= y; // returns true or false
    }
}



const isChildToo = makeBetween(0,10)
console.log(isChildToo(23));

// 

const isNineties = makeBetween(1990, 2000) 
console.log(isNineties(1989))

const isNiceWeather = makeBetween(60, 79)

console.log(isNiceWeather(67))