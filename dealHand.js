const {Deck}= require('./deck')


const myDeck = new Deck();

function dealHand(deck) {
  const hand = [];

  for (let i = 0; i < 5; i++) {
    hand.push(deck.dealCard());
  }

  return hand;
}

console.log("A random Hand Dealt:")
console.log(dealHand(myDeck))