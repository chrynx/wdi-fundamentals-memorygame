var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var score = 0;
var keepScore = function () {
	score = score + 1;
};

var checkForMatch = function () {
		if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You have found a match!');
			keepScore();
		}
		else {
			alert('Sorry, try again.');
		}

	};
};

var flipCard = function () {
var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	this.removeEventListener('click', flipCard);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

function clearBoard()
    {
        document.getElementById('game-board').innerHTML = "";
        document.getElementById('highscore').innerHTML = "";
        for (k = cardsInPlay.length; k !== 0; k--) {
        	cardsInPlay.pop();
        }
        createBoard();
    }

var createBoard = function () {
	for (var i = 0;i < cards.length;i++) {
var resetButton = document.getElementById('resetbutton');
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
resetButton.addEventListener('click', clearBoard);
document.getElementById('game-board').appendChild(cardElement);
};

var createScore = document.createElement('h4');
document.getElementById('highscore').appendChild(createScore);
createScore.innerHTML = "Score: " + score;
};

createBoard();







