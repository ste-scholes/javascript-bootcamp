// for each

const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num) {
console.log(num)
})

function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple)

// second parameter

numbers.forEach(function(num, ind){
    console.log(ind,num);
})

// books array containing book objects

const books =[{
    title: 'Good Omens',
    authors: ['Terry Pratchett','Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The complete Edition',
    authors: ['Jeff Smith'],
    reting: 4.42,
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}
]

// print each title 

books.forEach(function(book){
    console.log(book.title.toUpperCase())
})

// for loop version of the above for reference

for(let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase())
}

// map
// double values
const mynum = [20,21,22,23,24,25,26,27];
const mywrd = ['asap','byob','rsvp','diy'];

const timeTwo = mynum.map(function(num){
    return num * 2;
})

console.log(timeTwo);

// without return this is how map knows what value top return

// map even numbers in array

const even = mynum.map(function(n){
    return{
        value: n,
        isEven: n % 2 === 0
    }
})

console.log(even)

// my code
const wordy = mywrd.map(function(w){
    return{
        word: w,
        allCaps: w.toUpperCase(),
        long: w.length,
        tolong: w.length > 3
    }
})

console.log(wordy)