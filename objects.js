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

