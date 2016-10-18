function building(name,health,attack,Image){
  this.name = name
  this.attack = attack,
  this.health = health,
  this.image = Image
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
player1.opponent = player2
player1.opponent = player1

var gun = new building('gun',1,1,'<img src="images/gun.png" id="gun">');
var flag = new building('flag',0,1,'<img src="images/flag.png" id="flag">');

var stash = [gun,flag]

//creates the menu
function menuInit(player) {
  $('#menu').css('display','block')
  $('#menu').prepend('<p> build </p>')
  for (i = 0;i < 2; i++) {
       if (player.inventory.include(stash[i]) {
    } else {
          $('#menu').append(stash[i].image)
       } };
   $('#menu').append('<p> attack </p>')
   for (i = 0;i < 2; i++) {
       if (player.inventory.include(stash[i]) {
          $('#menu').append(stash[i].image)
    }
    
 };

function playerTurn(player) {
  menuInit(player);
  $('#gun').click(function() {
      if (player.inventory.include('gun') {
          player.opponent.lives = player.opponent.lives -1 
    }
      else {
          player.inventory.push('gun');
    }
  if (player1.lives>0 && player2.lives>0) {
    theBoxGame()
  }
 })
  $('#flag').click(function() {
      if (player.inventory.include('flag') {
          
    }
      else {
          player.inventory.push('flag');
     }
    if (player1.lives>0 && player2.lives>0) {
    theBoxGame()
  }
})


// main function for the game
function theBoxGame() {
  countDown();
  battle();
  if (win == 1) {
    playerTurn(player1)
  } else {
    playerturn(player2)
  }
}

$(document).ready(function() {
  $('#start').click(function() {
    theBoxGame();
  } )
});
