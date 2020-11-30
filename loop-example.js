for(let i = 1; i <=10; i++) {
    console.log('hello',i)
}

for(let i = 1; i<= 10; i += 3) {
    console.log('pocket tap', i)
}

// perfect squares - numbers times by themselves

// for(let num =1; num <= 20; num++) {
//     console.log(`${num}x${num} = ${num * num}`);
// }


for(let num =1; num <= 20; num++) {
   console.log(`${num}x${num} = ${num * num}`);
   
}

for( i = 50; i >= 0; i -=10) {
    console.log(i)
}

for(i = 200; i >= 0; i -=25){
    console.log(i)
}
console.log('The loop has ended')

const examScore = [98,77,84,91,57,66]

for(i = 0; i < examScore.length; i++) {
    console.log(i, examScore[i]);
}

// array and object

const myStudents = [
    {
        firstname: 'John',
        grade: 86
    },
    {
        firstname: 'Derek',
        grade: 97
    },
    {
        firstname: 'Evette',
        grade: 72
    },
    {
        firstname: 'Stuart',
        grade: 98
    },
    {
        firstname: 'Karl',
        grade: 89
    }
];

// student grades

// putting total within the loop would cause the total to be reset eveytime the loop ran
let total = 0;

for(let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade;
}

console.log('Total Grades: ' + total)

// average grades divide total by number of students
// this can be done by using myStudents.length

console.log('Avg Grades: '  + total / myStudents.length)

// for(let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i]
//     console.log(`${student.firstname} scrored ${student.grade}`)
// }


for( let i = 0; i < myStudents.length; i++) {
    console.log(`${myStudents[i].grade}  ${myStudents[i].firstname}`)
}

// what you would do normally
// for(i =0; i < myStudents.length; i++) {
//     console.log(`${myStudents[i]}`)
// }

// brings back objects not the data within

for( let i = 0; i < myStudents.length; i++) {
    console.log(myStudents[i].grade  + ' ' + myStudents[i].firstname)
}

// looping through a string

const word = 'stressed';

// for(i = word.length -1; i >= 0; i--){
//     console.log(word[i])
// }

const newWord = 'stressed';
let myword = ''

for(i = newWord.length -1; i >= 0; i--) {
    myword += newWord[i];
   // console.log(myword)
   
}

console.log(myword)

const myName = 'Stephen';

// for (let i = 0; i < myName.length; i++) {
//     console.log(myName)
// }
x = ''

for( x of myName) {
   x = myName
}

console.log(x)

// nested loop

for (let i = 1; i <= 10; i++ ){
    console.log('Outer Loop',i); // runs once
    for (let j = 10; j >= 0; j -= 2) {
        console.log('Inner loop',j); // completes run each time
    }
}

const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [8,32,16,4],
    [2,8,4,2]
];

let totalScore =0;
for ( let i=0; i < gameBoard.length; i++) {
   let row = gameBoard[i];
   for (let j =0; j < row.length; j++) {
       totalScore += row[j]
   }
}

console.log('End ' + totalScore)

const gameBoard2 = [
    [1,1,1,1],
    [2,2,2,2],
    [3,3,3,3],
    [4,4,4,4]
];

let totalScore2 =0;
for ( let i=0; i < gameBoard2.length; i++) {
   let row = gameBoard2[i];
   console.log(gameBoard2[i])
   for (let j =0; j < row.length; j++) {
       totalScore2 += row[j]
       console.log(row[j])
   }
}

console.log(totalScore2)

// while loop

for ( let i =0; i <= 5; i++) {
    console.log(i)
}

let j = 0;
while(j <= 5) {
    console.log('while loop ' + j )
    j++;

}

// while loop

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while(guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10)
}
console.log(`Snap you have a matching number! ${target} and ${guess} `)


console.log(target)
console.log(guess)

// break example using above code

const targ = Math.floor(Math.random() * 10);
let guess2 = Math.floor(Math.random() * 10);

while (true) {
    if (targ === guess2) break;
    console.log(`new target: + ${targ} Guess: ${guess2}`);
    guess2 = Math.floor(Math.random() * 10);
}
console.log(`Target: ${targ} Guess: ${guess2}`);
console.log('Snap you win')

// For of example

let subreddits = ['soccer', 'popheads','cringe','books'];


// using for
for(let i =0; i< subreddits.length; i++) {
    console.log(subreddits[i])
}

// updating to for of

for(let categories of subreddits) {
    console.log('Subreddits ' + categories)
}

for(let char of 'cockadoodledoo') {
    console.log(char)
}

// examples of for loop

// magic square example

let magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

// console.log(magicSquare)

// using nested for

// for (let i =0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`)
// }

// for of

for ( let row of magicSquare) {
    let sum =0;
    for(let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`)
}

// not to use for loop
// combine words from array one and array two

const words1 = ['mail','milk','bath','black'];
const words2 = ['box','shake','tub','berry'];

for (let i =0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
}

// you don't have to do anything with words2 array apart from call it

// objects and for of

const movieReview = {
    Arrival: 9.5,
    Alien: 9,
    'Kill Bill': 8.5,
    'Star Wars': 9.7,
    Vacation: 8.5,
    'Sleepy Hollow': 9.5,
}

// for (let x of movieReview) {
//     console.log(x)
// }

for (let movie of Object.keys(movieReview)) {
    console.log(movie, movieReview[movie])
}

console.log(Object.keys(movieReview))
console.log(Object.values(movieReview))

// to get avg review score 
const rating = Object.values(movieReview)
let revAvg = 0;
for(let r of rating) {
   revAvg += r
}
total /= rating.length; // totla devided by ratings length
console.log(revAvg)