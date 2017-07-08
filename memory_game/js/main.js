var cards = [
	{
		rank: "queen",
		suit: "hearts",
		card: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamons",
		card: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		card: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		card: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMath = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You have found a match!');
		}
		else {
			alert('Sorry, try again.');
		}

}
}
var flipCard = function (cardId) {

	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMath();
	console.log(cards[cardId].card);
	console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);


