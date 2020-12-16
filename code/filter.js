const nums = [34,35,67,54,109,102,32,9];

// boolean filter return true or false
const odds = nums.filter(n => n % 2 === 1)
const even = nums.filter(n => n % 2 === 0)

const bigNums = nums.filter(n => n > 50)

console.log('Odd Numbers: ' + odds)
console.log('Even Numbers: ' + even)
console.log('Numbers Over 50: ' + bigNums)

// more examples using books

// books array containing book objects

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

const ratings = books.filter(b => b.rating > 4.3)

console.log(ratings)

const fantasy = books.filter(b => b.genres.includes('fantasy'))

console.log(fantasy)

const shortForm = books.filter(b => (
    b.genres.includes('short stories') || b.genres.includes('essays')
))

console.log(shortForm)

// example of query on book website

const query = 'The';
const results = books.filter(book => (
    book.title.toLowerCase().includes(query.toLowerCase())
))

console.log(results)