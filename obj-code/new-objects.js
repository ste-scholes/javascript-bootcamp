
// takes numbers from reviews and performs mathamatical functions on them

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max, 
        min,
        sum,
        avg
    }
}

// reviews array
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// variable stats calls getStats function and passes reviews into it
const stats = getStats(reviews);

// prints out results stored in stats
console.log(stats)

// Computed properties

const role = 'host';
const person = 'Jools Holland';
const role2 = 'director';
const person2 = 'James Cameron';

// old way - first intialise object
const team = {}
team[role] = person;
team[role2] = person2;

// computed can use a variable name as a key name in an object literal property
// note variable name has to be in square brackets
const team ={
    [role]: person,
    [role2]: person2,
}

console.log(team)