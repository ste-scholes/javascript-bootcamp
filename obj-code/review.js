// function makeDeck() {
//     const suites =['hearts','diamonds','spades','clubs']
//     const values = '2,3,4,5,6,7,8,9,10,J,K,Q,A'
// }



const myDeck = {
  deck: [],
  drawCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,K,Q,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawCards.push(card);
    return card;
    
  },
  multi(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push[this.drawCard()];
    }
    return cards;
  },
  shuffle() {
    const {
      deck
    } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
};




// initialise the card dec
console.log(myDeck.initializeDeck())


console.log(myDeck.shuffle())
console.log(myDeck.drawCard())
console.log(myDeck.drawCard())
console.log(myDeck.multi(2))
console.log(myDeck.drawCards)
console.log(myDeck.shuffle())
// console.log(myDeck.deck)



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


// // shuffle(['a','b','c','d','e','f'])
// shuffle(['0','1','2','3','4','5'])



// creating another deck using a function
// this is a hacky way - there are better ways to do this but we haven't come across them yet

const makeDeck = () => {
  return {
      deck: [],
      drawCards: [],
      suits: ["hearts", "diamonds", "spades", "clubs"],
      values: "2,3,4,5,6,7,8,9,10,J,K,Q,A",
      initializeDeck() {
        const { suits, values, deck } = this;
        for (let value of values.split(",")) {
          for (let suit of suits) {
            deck.push({
              value,
              suit,
            });
          }
        }
      },
      drawCard() {
        const card = this.deck.pop();
        this.drawCards.push(card);
        return card;
        
      },
      multi(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
          cards.push[this.drawCard()];
        }
        return cards;
      },
      shuffle() {
        const {
          deck
        } = this;
        for (let i = deck.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
      }
    };
    
  }


  const myCards = makeDeck();

  console.log(myCards.initializeDeck())
  console.log(myCards.deck)
  console.log(myCards.shuffle())