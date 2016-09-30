function building(name,health,attack){
  this.attack = attack,
  this.health = health,
  this.image = image
}

function countDown() {
  var timer = 5
  for (var i = 1; i < 6; i++) {
    $('#cd').append('<p>' + timer + 'seconds left to make your choice </p>').delay(1000);
    
  }
};

player1.lives = 9;
player2.lives = 9;
player1.inventory = [];
player2.inventory = [];

var gun = new building('gun',1,1,'<img src="images/gun.png" id="gun">');
var flag = new building('flag',0,1,'<img src="images/flag.png" id="flag">');

var stash = [gun,flag]

//creates the menu
function menuInit(player) {
  $('#menu').prepend('<p> build </p>')
  for (i = 0;i < 2; i++) {
       if (player.inventory.include(stash[i]) {
    } else {
          $('#menu').append(stash[i].image)
       }
   $('#menu').prepend('<p> attack </p>')
   for (i = 0;i < 2; i++) {
       if (player.inventory.include(stash[i]) {
          $('#menu').append(stash[i].image)
    } 
       
       
    }
 };

function playerTurn(player) {
  
}

// main function for the game
function theBoxGame() {
  while (player1.lives > 0 && player2.lives > 0) {
    
    
  }
}

$(document).ready(function() {

};
