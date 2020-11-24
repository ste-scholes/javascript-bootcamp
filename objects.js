const fitBitData = {
    totalSteps: 23000,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

console.log(fitBitData)

console.log(fitBitData.avgCalorieBurn)

const numbers = {
    100 : 'one hundered',
   16: 'sixteen'
}

// console.log(numbers.100) // this will not work as it looks for number 100 which doesn't exist
console.log(numbers[100]) // this looks for the string 100 and it finds it

pets = {
    '9 my cat': 'Jasper',
    dog: 'Darcehole'
}

// console.log(pets.9 my cat)
console.log(pets['9 my cat'])

const pallette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

console.log(pallette['red'])
let mysteryColor = 'blue';

console.log(pallette[mysteryColor])

// updating and adding properties

// make a user review app

const userReview = {}; // start with empyt object - no reviews yet

userReview['queenBee49'] = 4.0; // add first review user is queenBee49 with a score of 4.0

userReview.mrSmith78 = 3.5 // uses dot notation to add user mrSmith78 with a score of 3.5

// to add a new reviewer we can do the folowing

userReview.colt = 5 // this added a user colt  with a score of 5

// to update we simply do the following

userReview['colt'] = 4.7

//or 
userReview.colt = 4.9
userReview.queenBee49 += 1

userReview['mrSmith78'] += .5
userReview.mrSmith78 ++;
// userReview['mrSmith78']++


console.log(userReview)

// Nested Arrays

const student = {
    firstname: 'David',
    surname: 'Jones',
    strengths: ['music', 'art'],
    exams: {
        midterm: 92,
        final: 88
    }
};

// say you wanted to find the average between the midterm and final exam results
// you would add the midterm and final together then devide by 2
// you would ensure midterm was added to final first by putting them in brackets
const avg = (student.exams.midterm + student.exams.final) /2;

console.log(avg)

// access art via variable
const strength = student.strengths[1];

console.log(strength)

// shopping cart example Array with Objects within
const shoppingCart = [
{
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
},
{
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
},
{
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
}

];

const costItem = shoppingCart[1].price * shoppingCart[1].quantity

console.log(costItem)

const fireCost = shoppingCart[2].price * shoppingCart[2].quantity

console.log('The cost of your Firestick order is ' + fireCost)

// Tic Tac Toe example
const game = {
    player1: {
        username: 'Jasper',
        playingAs: 'X'
    },
    player2: {
        username:'Sooty',
        playingAs: 'O'
    },
    board: [
    ['O', null, 'X'],
    ['X', 'O', 'X'],
    [null,'O', 'X'],
]
}

// Equality

let myNum = [1,2,3];
let mystery = [1,2,3];
let moreNums = myNum

moreNums.push(4)

console.log(myNum === moreNums)

console.log(myNum === mystery) // brings back false

console.log(myNum)

// even though the content of these two arrays is exactly the same JavaScript sees them as two completely differnt objects
//Why?
//Remember that the variable point to a reference point only!  The actual data is not considered

// Arrays could be huge, we are comparing the addresses held the variable, not the data held within 

const newUser = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};

this does not work
if(user.notifications === []) {
    console.log('No new notifcations');
}

// this will work - .length will return true because the array is empty then ! switches that to false

if(!newUser.notifications.length) {
    console.log('No new notifications')
}

// check if array has exact equality