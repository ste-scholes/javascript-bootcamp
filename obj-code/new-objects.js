
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
const team2 ={
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen'
}

console.log(team2)

// add new property old way

function addProp(obj,k,v) {
    const copy = {...obj};
    copy[k] = v
    return copy
}



const res = addProp(team2, 'happy', ':)')
console.log(res)
// new way
const addProp2 = (obj, x, y) => {
    return {
        ...obj,
        [x]: y
    }
}

const addNew = addProp2(team2, 'happy face', ':)')
console.log(addNew)

// new way implicit return

const propNew =(obj, x, y) => ({...obj,[x]: y})
const addSmile = propNew(team2, 'Happy', ':)');
console.log(addSmile)