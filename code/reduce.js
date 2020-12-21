const reduction = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); 

console.log(reduction)

const nums = [3,4,5,6,7];

const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
});

console.log(product);

// grades example

const grades = [87,64,96,92,88,99,73,70,64];

const maxGrade = grades.reduce((max, currVal) => {
    if(currVal > max) return currVal;
    return max;
})

console.log(maxGrade)

// refactored above to use Math.max method

const maxGrade2 = grades.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

console.log(maxGrade2)



// refactored to use Math.min and implicit return 

const minGrade = grades.reduce((min, current) => (
    Math.min(min, current)
));

console.log(minGrade) // 64 lowest number in array

console.log(Math.max(98,45)) // returns 45765759 the largest number!

// initial value

const addUp = [10,20,30,40,50];

const addArray = addUp.reduce((sum, currVal) => {
    return sum + currVal;
},1000) // initialise at this number

// so the above starts at 1000 and then adds 150 to it's total

console.log(addArray)

// Tally 

// uses empty object

const votes = ['y','y','n','y','n','y','n','y','n','n','a','n','y','y','Absent'];

const result = votes.reduce((tally, vote) => {
    if(tally[vote]) {
        tally[vote]++ 
    } else {   
        tally[vote] = 1;
    }
    return tally;
}, {})

console.log(result)

// refectored 

const results = votes.reduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {})

console.log(results)

// books

const books =[
    {    
        title: 'Good Omens',
        authors: ['Terry Pratchett','Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction','fantasy']
    },
    {
        title: 'Change My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction','essays']
    },
    {
        title: 'Bone: The complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction','graphic novel','fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction','fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction','historic fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction','fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction','short stories']
    },
    {
        title: 'A Truely Horrible Book',
        authors: ['Xavier Time'],
        rating: 2.18,
        genres: ['fiction','garbage']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy','epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    },
    
    ]

    // group books in an array

    const rateBook = books.reduce((groupedBooks, book) => {
       const key = Math.floor(book.rating)
      if(!groupedBooks[key]) groupedBooks[key] = [];
      groupedBooks[key].push(book)
      return groupedBooks;

    },{})



   console.log(rateBook);