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


// code challenge answer

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
}

console.log(isValidPassword('45678stephen','stephen'))

// refactored

function validPass(password,username) {
    if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
        return false
    }
    return true
}

console.log(`test ${validPass('12345678', 'Stephen')}`)

// code challenge my attempt

function passWrd(password, username) {
    if (password.length >= 8) {
      console.log("Yes more than 8 characters: " + password);
    } else {
      console.log("No less than 8 characters " + password);
    }
    if (password.includes(username)) {
      console.log("Yes " + username + " is in password");
    } else {
      console.log("No " + username + " is not in password");
    }
    if (password.indexOf(" ") == -1) {
      console.log("No space detected");
    } else {
      console.log("Space detected");
    }
  }

  console.log(passWrd("456789999", "ste"));

  // another example using variables

  function varPass(password, username) {
      const tooshort = password.length < 8;
      const spacer = password.indexOf(' ') !== -1;
      const hasnameIn = password.indexOf(username) !== -1;
      if (tooshort || spacer || hasnameIn) return false;
      return true;
  }
  console.log(varPass("456789999", "ste"));