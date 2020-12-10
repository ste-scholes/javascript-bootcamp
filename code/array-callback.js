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