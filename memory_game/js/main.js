const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},


{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},



{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
]

const cardsInPlay = []

var checkForMatch = function(){
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	}

	else if (cardsInPlay[0] !== cardsInPlay[1]){
		alert("Sorry, try again!")
}

}

function flipCard() {
const cardID = this.getAttribute('data-id');
this.setAttribute('src', cards[cardID].cardImage);
console.log("User flipped" + " " + cards[cardID].rank);
cardsInPlay.push(cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);

if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};


function createBoard(){


for (var i = 0; i < cards.length; i++) {

	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}

};

createBoard();





