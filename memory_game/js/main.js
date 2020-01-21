// console.log("Up and running!");

var cards = [
"queen","queen","king","king"
];

cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
var cardId = cardId;
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

checkForMatch();
// if (cardsInPlay[0] === cardsInPlay[1]) {
// alert("You found a match!");
// } else {
// alert("Sorry, try again.");
// };
};

flipCard(0);
flipCard(2);


// let cardOne = cards[0];
// cardsInPlay.push('cardOne');
// console.log("User flipped " + cardOne);

// let cardTwo = cards[2];
// cardsInPlay.push('cardTwo');
// console.log("User flipped " + cardTwo);