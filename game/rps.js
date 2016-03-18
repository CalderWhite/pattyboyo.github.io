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
		} else if (event.which === 73){
			player2.choice = 1;
		} else if (event.which === 79){
			player2.choice = 2;
		} else if (event.which === 80){
			player2.choice = 3;
		} 
	})
	$('button').click(function() {
		
	if (player1.choice > 0 && player2.choice > 0) {
		$('#p1').remove();
		$('#p2').remove();
		$('#win').remove();
		battle();
		if (player1.choice === 1) {
			$('.winner').append('<img src="rock.jpg" id="p1">')
		} else if (player1.choice === 2) {
			$('.winner').append('<img src="scissors.jpg" id="p1">')
		} else if (player1.choice === 3) {
			$('.winner').append('<img src="papper.jpg" id="p1">')
		}
		if (player2.choice === 1) {
			$('.winner').append('<img src="rock.jpg" id="p2">')
		} else if (player2.choice === 2) {
			$('.winner').append('<img src="scissors.jpg" id="p2">')
		} else if (player2.choice === 3) {
			$('.winner').append('<img src="papper.jpg" id="p2">')
		}
		if (win === 1) {
			$('.winner').append('<p id="win">player1 wins!</p>')
		} else if (win === 2) {
			$('.winner').append('<p id="win">player2 wins!</p>')
		} else if (win === 3) {
			$('.winner').append('<p id="win">It is a draw!</p>')
		}
	}
})
})
