class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1.name === card2.name) {
      this.pairsClicked++;
      this.pairsGuessed++;
    } else {
      thi.spairsClicked++;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      throw alert("you win")
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
