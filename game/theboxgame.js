function building(attack,health) {
  this.attack = attack,
  this.health = health,
  this.stages = stages,
}


var gun = new building(1,1)
var starting = new building(0,1)
var machinegun = new building(2,3)
var flag = new building(0,1)
var triple = new building(3,1)
var mini = new building(4,3)
var triplef = new building(0,3)

player1.lives = 9
player2.lives = 9
player1.inventory = []
player2.inventory = []

function menu() {
  $('#menu').toggle()
}

var timer = 5

function countDown() {
  for (var i = 1; i < 6; i++) {
    $('#cd').append('<p>' + timer + 'seconds left to make your choice </p>');
    window.setTimeout(100);
  }
}

function theboxgame() {
  tie:
  countDown();
  battle();
  $('#cd').remove()
  if (battle === 3) {
    alert('It was a tie! Try again')
    continue tie;
  } else if (battle === 2) {
    menu()
    $('#menu').append('<h1>Player 2 Wins! Now make you choice!</h1>');
    if (player2.inventory.indexOf('gun') == -1) {
      $('menu').append('<img src="image/gun.png">')
    } else if (player2.inventory.indexOf('gun') > -1 && player2.inventory.indexOf('triple') == -1) {
      $('menu').append('<img src="image/triple.png">')
    }
    if (player2.inventory.indexOf('starting') == -1 && player2.inventory.indexOf('machinegun') == -1 && player2.inventory.indexOf('mini') == -1) {
      $('menu').append('<img src="image/starting.png">')
    } else if (player2.inventory.indexOf('starting') > -1 && player2.inventory.indexOf('machinegun') == -1) {
      $('menu').append('<img src="image/machinegun.png">')
    } else if (player2.inventory.indexOf('machinegun') > -1 && player2.inventory.indexOf('starting') == -1 && player2.inventory.indexOf('mini') == -1) {
      $('menu').append('<img src="image/mini.png">')
    }
    if (player2.inventory.indexOf('flag') == -1 && player2.inventory.indexOf('triplef') == -1) {
      $('menu').append('<img src="image/flag.png">')
    } else if (player2.inventory.indexOf('flag') > -1 && player2.inventory.indexOf('triplef') == -1) {
      $('menu').append('<img src="image/triplef.png">')
    }
    if (player2.inventory.indexOf('gun') > -1|| player2.inventory.indexOf('machinegun') > -1|| player2.inventory.indexOf('mini') > -1|| player2.inventory.indexOf('triple') > -1) {
        $('#menu').append('<img src="image/attack.png">')
    }
  } else if (battle === 1) {
    menu()
    $('#menu').append('<h1>Player 1 Wins! Now make you choice!</h1>');
    if (player1.inventory.indexOf('gun') == -1) {
      $('menu').append('<img src="image/gun.png">')
    } else if (player1.inventory.indexOf('gun') > -1 && player1.inventory.indexOf('triple') == -1) {
      $('menu').append('<img src="image/triple.png">')
    }
    if (player1.inventory.indexOf('starting') == -1 && player1.inventory.indexOf('machinegun') == -1 && player1.inventory.indexOf('mini') == -1) {
      $('menu').append('<img src="image/starting.png">')
    } else if (player1.inventory.indexOf('starting') > -1 && player1.inventory.indexOf('machinegun') == -1) {
      $('menu').append('<img src="image/machinegun.png">')
    } else if (player1.inventory.indexOf('machinegun') > -1 && player1.inventory.indexOf('starting') == -1 && player1.inventory.indexOf('mini') == -1) {
      $('menu').append('<img src="image/mini.png">')
    }
    if (player1.inventory.indexOf('flag') == -1 && player1.inventory.indexOf('triplef') == -1) {
      $('menu').append('<img src="image/flag.png">')
    } else if (player1.inventory.indexOf('flag') > -1 && player1.inventory.indexOf('triplef') == -1) {
      $('menu').append('<img src="image/triplef.png">')
    }
    if (player1.inventory.indexOf('gun') > -1|| player1.inventory.indexOf('machinegun') > -1|| player1.inventory.indexOf('mini') > -1|| player1.inventory.indexOf('triple') > -1) {
        $('#menu').append('<img src="image/attack.png">')
    
        

  }
  
  
  
}

$(document).ready(function() {
  $('#start').click(function() {
    while(player1.lives > 0 && player2.lives > 0) {
      theboxgame()
    }
  })
  
  
})
