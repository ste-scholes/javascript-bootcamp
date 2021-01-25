function makeDeck() {
    const suites =['hearts','diamonds','spades','clubs']
    const values = '2,3,4,5,6,7,8,9,10,J,K,Q,A'
}



const myDeck = {
  deck: [],
  drawCards:[],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,K,Q,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        });
      }
    }
    // return deck;
  },
  drawCard() {
     const card = this.deck.pop()
     this.drawCards.push(card)
     return card;
  },
  drawMulti(numCards) {
      const cards = [];
      for(let i=0; i < numCards; i++) {
      cards.push[this.drawCard()];
    }
    return cards;
  }
};




// initialise the card dec
console.log(myDeck.initializeDeck())
console.log(myDeck.drawCard())
console.log(myDeck.drawCard())
console.log(myDeck.drawMulti(3))
console.log(myDeck.deck)


// this calls drawCard to draw a card remove it from array and add it to variable card1
// const card1 = myDeck.drawCard()

// thislogs the value stored from card 1 to the console
// console.log(card1)

// this displays the remaining deck
// console.log(myDeck.deck)
// console.log(myDeck.drawCard())

// the fisher yates shuffle
// VIDEO 1:10:44

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    }
}


// shuffle(['a','b','c','d','e','f'])
shuffle(['0','1','2','3','4','5'])