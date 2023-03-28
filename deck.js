class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffleDeck();
  }

  createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealCard() {
    return this.cards.pop();
  }

  resetDeck() {
    this.cards = [];
    this.createDeck();
    this.shuffleDeck();
  }
}

function isStraight(hand) {
    if(hand.length===0){
        return false;
    }
    const cardValues = hand.map(card => {
    if (card.rank === 'A') {
      return 1; // Ace can also be used as the lowest card
    } else if (card.rank === 'J') {
      return 11;
    } else if (card.rank === 'Q') {
      return 12;
    } else if (card.rank === 'K') {
      return 13;
    } else {
      return parseInt(card.rank);
    }
  });
  
  cardValues.sort((a, b) => a - b);

  // Check for straight
  for (let i = 0; i < cardValues.length - 1; i++) {
    if (cardValues[i] + 1 !== cardValues[i + 1]) {
      return false;
    }
  }

  return true;
}

function isColor(hand) {
    if(hand.length===0){
        return false;
    }
  const colors = hand.map(card => card.suit);
  const uniqueColors = new Set(colors);
  return uniqueColors.size === 1;
}

module.exports={
    Card,
    isColor,
    isStraight,
    Deck
}

