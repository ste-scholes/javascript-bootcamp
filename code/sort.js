const prices = [400.50,3000,99.99,35.99,12.00,9500];
const prices2 = [400.50,3000,99.99,35.99,12.00,9500];

const badSort = prices.slice().sort()

const ascSort = prices.slice().sort((a,b) => a - b)

const descSort = prices.slice().sort((a,b) => b - a)

console.log(ascSort)

console.log(descSort)

console.log(badSort)

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

    // sort on books

    const descRating = books.slice().sort((a,b)=> b.rating - a.rating)

    console.log(descRating)

    const ascRatings = books.sort((a,b)=> a.rating - b.rating);

    console.log(ascRatings)