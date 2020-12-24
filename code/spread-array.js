const cephlopods = ['dumbo octopus','humboldt squid','flamboyant cuttlefish'];

const gastorpods = ['giant african snail','banana slug' ,'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [... cephlopods, ...gastorpods ];

console.log(mollusca)

console.log('Garden slug',...gastorpods)

const inverts = [...gastorpods,...cephlopods,...cnidaria]

console.log(inverts)

const name = 'Stephen'

console.log([...name])
console.log({...name})

// you can do the aabove the old way using concat

const oldWay = cephlopods.concat(gastorpods);

console.log(oldWay)


const newGastropods = [...gastorpods];

console.log(newGastropods)

// using split
const abcSplit = 'abcdef'

console.log(abcSplit.split(''))