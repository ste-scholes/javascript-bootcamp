let shopping = ['cheese', 'cereal', 'milk', 'ice']

console.log(shopping)

let bingo = [12,10,8,7,22]
console.log(bingo[2]) // 8

let collection = [12, 'dog', true, null, NaN] // javascript arrays can hold different data types, other languages won't allow this


let colours = ['red','yellow','green', 'blue','purple']

console.log(colours[colours.length-1])

// acessing arrays 

// changing value in array will change original value held
let shoppingList = ['Cheese', 'Milk']

shoppingList[1] ='Whole Milk' // update a value

// add to end of known list

shoppingList[2] = 'Ice Cream'

// add to end of list - unkown item length

shoppingList[shoppingList.length] = 'Tomatoes'

shoppingList[shoppingList.length] = 'coffee'

console.log(shoppingList)

// array methods

let topSongs = [
    'First time I ever saw your face',
    'God only knows',
    'A day in the life',
    'Life on Mars'
];

topSongs.push('Venga bus is coming')
console.log('pop '+topSongs.pop())

console.log(topSongs)

// unshift

 let dishesToDo = ["Big Platter"];

 dishesToDo.unshift("large plate"); // adds each one to the array
 dishesToDo.unshift("small plate");
 dishesToDo.unshift("bowl");
 dishesToDo.unshift("cup");
 dishesToDo.unshift("spoon");

// note you can chain items to add together

dishesToDo.unshift('knife','fork') // but they will retain their order as added - knife then fork
console.log(dishesToDo)

 // shift

dishesToDo.shift() // removes each item from array
dishesToDo.shift() // you don't need value
dishesToDo.shift()
dishesToDo.shift()
console.log(dishesToDo.shift()) // this returns item removed to console


console.log(dishesToDo)

// concat

const arr1 = ['a','b','c'];

const arr2 = ['d','e','f']

console.log(arr1.concat(arr2)) // rmember structure (arr2)

// example

const fruit =['apple', 'pair']

const veg = ['carrot', 'onion']

const meat = ['chicken','steak']

console.log(fruit.concat(veg))

console.log(veg.concat(fruit))

let food = fruit.concat(veg, meat)
console.log(food)

// includes 

let ingredients = [
    'onions',
    'tomatoes',
    'chicken',
    'peppers'
];

console.log(ingredients.indexOf('chicken'))

console.log(ingredients.indexOf('chicken', 4))

// console.log(ingredients.includes('onions'));
// console.log(ingredients.includes('onions', 2));

// if (ingredients.includes('fish')) {
//     console.log('I dont like onions') 
//   }  else {
//             console.log('im good to go')
//         }
    

// slice

let animals = ['shark', 'salmon','whale,','bear','lizard','tortoise']

let swimmers = animals.slice(0,3)
console.log(swimmers)

let mammals = animals.slice(2,4)
console.log(mammals)

let reptiles = animals.slice(4,6)
console.log(reptiles)

let quadruped = animals.slice(-3)
console.log(quadruped)

// splice

animals.splice(1,0,'Octopus')
console.log(animals)
animals.splice(3,2)
console.log(animals)

animals.splice(0,2,'SHARK','OCTOPUS' )
console.log(animals)

// sort

let people = ['Maggie May','Mrs Robinson', 'Angie','Jolene','Roxanne'];

console.log(people.sort())

let numbersArr = [10, 100000, 34, 67, 99]

console.log(numbersArr.sort()) // coverts every value to string