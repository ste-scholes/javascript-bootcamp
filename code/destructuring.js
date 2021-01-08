const raceResults = [
    'Eluid Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronse = raceResults[2];

// console.log(`1st ${gold} 2nd ${silver} 3rd ${bronse}`)

const [gold, silver, bronze] = raceResults
console.log(gold, silver, bronze)

// first and 4th

// const [first, , , fourth] = raceResults
// console.log(first, fourth)

// winner and runners up
const [ winner, ...runnerUp] = raceResults
console.log(winner, runnerUp)

// obj

const runner = {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya',
}

// 2016 Olympic marathon winners

const results = [{
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
},
{
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia',
},
{
    first: 'Galen',
    last: 'Rupp',
    country: 'United States',  
}
]


// const [,{country}] = results

// console.log(country)


const [{first: goldMedal}, {first: silverMedal}] = results

console.log(goldMedal, silverMedal)

// select first last name

// variable names are exisiting key names
// we can rename them

// const {first, last, country} = runner;

// console.log(first, last, country)

// this takes keyword contry and saves it to variable nation
const {country: nation, title: honorific} = runner;
console.log(nation, honorific)

// everything else

const {first, last, ...details} = runner

console.log(first, last, details)

const athlete = {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya',
}

function print(person) {
    const {first, last, title} = person
    console.log(`${first} ${last}, ${title}`)
}

print(athlete)

// array with function

const response = [
    'http/1.1',
    '200 OK',
    'application/json',

]

function parseResponse([protocol, statusCode, cont]) {
    console.log(`Status: ${statusCode}`)
}

parseResponse(response)
