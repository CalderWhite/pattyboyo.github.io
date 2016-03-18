function Player(number) {
	this.number = number;
	this.choice = 0;
}

var player1 = new Player(1);
var player2 = new Player(2);
var win = 0;

var battle = function() {
	if (player1.choice === player2.choice) {
		win = 3;
	} else if (player1.choice + 2 === player2.choice && player1.choice === 1){
		win = 2;
	} else if (player1.choice + 1 === player2.choice && player1.choice === 1) {
		win = 1;
	} else if (player1.choice + 1 === player2.choice && player1.choice === 2) {
		win = 1;
	} else if (player1.choice - 1 === player2.choice && player1.choice === 2) {
		win = 2;
	} else if (player1.choice - 1 === player2.choice && player1.choice === 3) {
		win = 2;
	} else if (player1.choice - 2 === player2.choice && player1.choice === 3) {
		win = 1;
	} else {
		alert ('someone pressed the wrong button')
	}
}

var Reset = function () {
	win = 0;
	player1.choice = 0;
	player2.choice = 0;
}

$(document).ready(function() {
	$(document).keydown(function(event) {
		if (event.which === 81) {
			player1.choice = 1;
		} else if (event.which === 87){
			player1.choice = 2;
		} else if (event.which === 69){
			player1.choice = 3;
		} else if (event.which === 37){
			player2.choice = 1;
		} else if (event.which === 40){
			player2.choice = 2;
		} else if (event.which === 39){
			player2.choice = 3;
		} 
	})
	if (player1.choice > 0 && player2.choice > 0) {
		battle();
		if (win === 1) {
			$('.winner').append('<p>player1 wins!</p>')
		} else if (win === 2) {
			$('.winner').append('<p>player2 wins!</p>')
		} else if (win === 3) {
			$('.winner').append('<p>It is a draw!</p>')
		}
	}

})
