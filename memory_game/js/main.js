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


var cardsInPlay = []
var score = 0
var result = document.getElementById("is-there-a-match");
var clickedCards = document.getElementsByClassName("clicked");

var flipCard = function() {
var cardID = this.getAttribute('data-id');
this.setAttribute('src', cards[cardID].cardImage);
this.setAttribute("class", "clicked")
console.log("User flipped" + " " + cards[cardID].rank);
cardsInPlay.push(cards[cardID].rank);
if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};


var restart = function(){
	for (var i = 0; i < clickedCards.length; i+=1){
clickedCards[i].setAttribute("src", "images/back.png")
}
}

var delayedRestart = function(){
	var timeOut = window.setTimeout(restart, 1000);
}




var checkForMatch = function() {
	if (cardsInPlay[0]===cardsInPlay[1]){
		result.textContent = "It's a match!";
		 score += 1;
		 document.getElementById("score").textContent = score
		 delayedRestart();		}

	else {
		result.textContent = "Sorry, try again.";
		delayedRestart();
	}
	cardsInPlay = []

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

 



var resetGame = function(){
	score = 0;
	document.getElementById("score").textContent = score;
	result.textContent = "NEW GAME";
	restart();
};


createBoard();
document.querySelector("button").addEventListener("click", resetGame);





