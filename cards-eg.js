function playingCards() {
    let select = 0;
   const card = ['Ace', '2', '3' ,'4', '5', '6', '7', '8' ,'9', '10', 'Jack', 'Queen', 'King'];
    const suit = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
       const valIdx = Math.floor(Math.random() * card.length)
        select = card[valIdx]
      const suits = Math.floor(Math.random() * suit.length)  
      const cardSuit = suit[suits]
      //console.log(select + ' of ' + cardSuit)
      return {value: select, suit: cardSuit }
    } 


console.log(playingCards())

// rework
function pick(arr) {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}


function myCards() {
    const card = ['Ace', '2', '3' ,'4', '5', '6', '7', '8' ,'9', '10', 'Jack', 'Queen', 'King'];
    const suit = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    const value = pick(card)
    const suites = pick(suit)
      return {card: value, suit: suites }
    }

    console.log(myCards())

//

function myCard() {
    const card = ['Ace', '2', '3' ,'4', '5', '6', '7', '8' ,'9', '10', 'Jack', 'Queen', 'King'];
    const suit = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    // const value = pick(card)
    // const suites = pick(suit)
      return {card: pick(card), suit: pick(suit) }
    }

    console.log(myCard())


// my stuff






function pick(arr) {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

console.log(pick(['1','2','a','z']))


function word(arr) {
    const wrd = Math.floor(Math.random() * arr.length)
    return arr[wrd]
}

console.log(word(['sick','tired','happy','sad']))

// test

const myArray = ['Jasper', 'Sooty', 'Plec', 'Catfish', 'Mollies']
const pets = ['cat','dog','fish','bird']

function myPet(arr) {
    let fav = Math.floor(Math.random() * arr.length)
    return arr[fav]
}

console.log(myPet(myArray))
console.log(myPet(pets))