const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Canine',
    furry: true,
    legs: 4
};

// combining properties from different objects

const dog = {
    ...canine,
    isPet: true,
    isAdorable: true,
}

console.log(dog)

const houseCat = {
    ...feline,
    isGrumpy: true,
    isUnpredictable: true,
    isFuckingHorrible: true,
}

console.log(houseCat)

const tripod = {
    ...canine,
    legs: 3,
}

console.log(tripod)

const catDog = {
    ...feline,
    ...canine,
}

console.log(catDog)

// const doggo = [...canine]

const kitty = {...[feline]}

console.log(kitty)

const random =[...'hello', {
    ...catDog,
}];

console.log(random)