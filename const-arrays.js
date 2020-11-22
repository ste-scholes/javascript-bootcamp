const city = 'London';

//const city = 'Liverpool'

console.log(city); // can't reassign const

const foods =['milk']

foods.push('CHOCKKY')
foods.unshift('hairy Taco')
foods.unshift('bearded clam')


console.log(foods)

const colors = [
    ['red','crimson'],
    ['blue','navy blue'],
    ['green','emerald'],
    ['purple','orchid'],
    ['orange','dark orange']
];

const animalpairs = [
    ['doe','buck'],
    ['ewe','ram'],
    ['peahen','peacock']
];

console.log(animalpairs[2][1])
console.log(animalpairs[0][1] = 'stag')
console.log(animalpairs[0][1])

const animalpairs2 = [
    ['doe',['buck','stag']],
    ['ewe','ram'],
    ['peahen',['peacock','chick']]
];

console.log(animalpairs2[0][1][0])