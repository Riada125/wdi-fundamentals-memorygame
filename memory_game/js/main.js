const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = []


function checkForMatch(){

	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	}

	else if (cardsInPlay[0] !== cardsInPlay[1]){
		alert("Sorry, try again!")
}

}

function flipCard(cardID) {
cardsInPlay.push(cards[cardID]);
console.log("User flipped" + " " + cards[cardID])

if (cardsInPlay.length === 2) {
	
	}
}




flipCard(0);
flipCard(2);

checkForMatch();


