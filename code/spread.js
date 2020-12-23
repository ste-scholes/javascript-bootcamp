console.log(Math.max(1,2,3,4,5,6,7,99))
console.log(Math.min(1,2,3,4,5,6,7,99))

const num = [1,2,3,4,5,6,7,8,99];

console.log(Math.min(num))

console.log(Math.max(... num))
console.log(...num)

// 

function giveMe4(a,b,c,d) {
    console.log('a',a)
    console.log('b',b)
    console.log('c',c)
    console.log('d',d)
}

giveMe4(4,5,6,7)

const colours = ['red','blue','green','yellow']

giveMe4(...colours)