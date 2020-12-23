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