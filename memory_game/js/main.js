// console.log("Up and running!");

const cards = [
// "queen","queen","king","king"
{
rank: 'queen',
suit: 'hearts',
cardImage:'images/queen-of-hearts.png',
},
{
rank: 'queen',
suit: 'diamonds',
cardImage:'images/queen-of-diamonds.png',
},
{
rank: 'king',
suit: 'hearts',
cardImage:'images/king-of-hearts.png',
},
{
rank: 'king',
suit: 'diamonds',
cardImage:'images/king-of-diamonds.png',
}
	];

cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
var cardId = cardId;
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

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