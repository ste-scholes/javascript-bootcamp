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