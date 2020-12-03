// functions
function grumpus() {
    console.log('Urgh .. you again?');
    console.log('Go away');
    console.log('Leave me alone');
}

//console.log(grumpus())

// using function within a loop

for(let i = 0; i < 5; i++) {
   grumpus()
}

// single dice role

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
}

//rollDie()

function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

//throwDice()

function sixDice(){
    for (let i = 0; i < 5; i++) {
        rollDie()
    }
}

sixDice()

// greeting

function greeting(person) {
    console.log(`Hi!, ${person}`);
}

greeting('Stephen')

// recreating dice roll using parameter

function numDice(numRoll) {
    for (let i = 0; i < numRoll; i++) {
        rollDie();
    }
}

numDice(2)

// multiple arguments

function sum (x, y) {
    console.log(x + y)
}

sum(5,5)

function divide(a,b) {
    console.log(a / b)
}

divide(2,8)

// return

function addUp(x, y) {
     return x + y
}

let total = addUp(6,6)
console.log(total)

// return if

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    } else {
        return false;
    }
}

console.log(isPurple('purple'))


// improvement

function isGreen(color) {
    if (color === 'green') {
        return true;
    } 
        return false;
}
console.log(isGreen('green'))

// shorter version 

function isRed(color) {
    return color === 'red'
}

console.log(isRed('red'))

// example using array

function containsYellow(arr) {
    for(let color of arr){
        if(color === 'yellow' || color === 'green'){
            return true
        }
        // return false - this would exit on the first loop iteration
    }
    return false
}

console.log(containsYellow(['blue', 'red', 'yellow']))


// code challenge

function isValidPassword(password, username){
    if(password.length > 8 && !password === username ) {
        return true
    } else {
        return false
    }
}

console.log('test' + isValidPassword(16453578,3453453453))