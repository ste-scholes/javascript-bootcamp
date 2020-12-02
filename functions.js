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