// EVERY

const words = ['dog', 'dig', 'log', 'bag', 'bag','wag'];

const threeLets = words.every(word => word.length === 3)

console.log(threeLets)

const endG = words.every(word => {
    const last = word.length -1;
    return word[last] === 'g'
})

console.log(`All end in letter g: ${endG}`)

// SOME

const startsD = words.some(word => word[0] === 'd')

console.log(startsD)

const newWords = ['dog','jello','log','cupcake','bag','wag']

const cake = newWords.some(w => w.includes('cake'))

console.log(cake)

// every with books array

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

const bookScore = books.every(book => book.rating >= 3.5)

console.log(bookScore)

const twoAuthors = books.some(book => book.authors.length === 2)
console.log(`More than one author: ${twoAuthors}`)

const names = ['Stephen Scholes','Paula', 'Plec']

console.log(names[2])

console.log(books[0].title,books[0].authors)