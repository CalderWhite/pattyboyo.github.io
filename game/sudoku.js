
var sudoku = []

var initialize = function() {
	for(var i = 0;i < 81;i++) {
		if ($('input').eq(i).hasClass('orginal') === false) {
			sudoku.push(0)
		} else {
			
			sudoku.push(parseInt($('input').eq(i).val()))
		}
	}
}

var zone1 = [sudoku[1],sudoku[2],sudoku[3],sudoku[10],sudoku[11],sudoku[12],sudoku[19],sudoku[20],sudoku[21]]
var zone2 = [sudoku[4],sudoku[5],sudoku[6],sudoku[13],sudoku[14],sudoku[15],sudoku[22],sudoku[23],sudoku[24]]
var zone3 = [sudoku[7],sudoku[8],sudoku[9],sudoku[16],sudoku[17],sudoku[18],sudoku[25],sudoku[26],sudoku[27]]
var zone4 = [sudoku[28],sudoku[29],sudoku[30],sudoku[37],sudoku[38],sudoku[39],sudoku[46],sudoku[47],sudoku[48]]
var zone5 = [sudoku[31],sudoku[32],sudoku[33],sudoku[40],sudoku[41],sudoku[42],sudoku[49],sudoku[50],sudoku[51]]
var zone6 = [sudoku[34],sudoku[35],sudoku[36],sudoku[43],sudoku[44],sudoku[45],sudoku[52],sudoku[53],sudoku[54]]
var zone7 = [sudoku[55],sudoku[56],sudoku[57],sudoku[64],sudoku[65],sudoku[66],sudoku[73],sudoku[74],sudoku[75]]
var zone8 = [sudoku[58],sudoku[59],sudoku[60],sudoku[67],sudoku[68],sudoku[69],sudoku[76],sudoku[77],sudoku[78]]
var zone9 = [sudoku[61],sudoku[62],sudoku[63],sudoku[60],sudoku[61],sudoku[62],sudoku[79],sudoku[80],sudoku[81]]

var simpleRow = function(a) {
	if (a % 9 <= 1) {
		rS = 1
	} else if (a % 9 <= 2) {
		rS = 2
	} else if (a % 9 <= 3) {
		rS = 3
	} else if (a % 9 <= 4) {
		rS = 4
	} else if (a % 9 <= 5) {
		rS = 5
	} else if (a % 9 <= 6) {
		rS = 6
	} else if (a % 9 <= 7) {
		rS = 7
	} else if (a % 9 <= 8) {
		rS = 8
	} else if (a % 9 <= 9) {
		rS = 9
	}
}

var simpleColumn = function(a) {
	if (a % 9 === 1 || a === 1) {
		cS = 1
	} else if (a % 9 === 2 || a === 2) {
		cS = 1
	} else if (a % 9 === 3 || a === 3) {
		cS = 1
	} else if (a % 9 === 4 || a === 4) {
		cS = 2
	} else if(a % 9 === 5 || a === 5) {
		cS = 2
	} else if (a % 9 === 6 || a === 6) {
		cS = 2
	} else if (a % 9 === 7 || a === 7) {
		cS = 3
	} else if (a % 9 === 8 || a === 8) {
		cS = 3
	} else if (a % 9 === 0) {
		cS = 3
}}

var rowCheck = function(a) {
	if (a % 9 <= 1) {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true

			}
		}
	} else if (a % 9 <= 2) {
		for (var i = 10;i<19;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 3) {
		for (var i = 19;i<28;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 4) {
		for (var i = 28;i<37;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 5) {
		for (var i = 37;i<46;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 6) {
		for (var i = 46;i<55;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 7) {
		for (var i = 55;i<64;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 8) {
		for (var i = 64;i<73;i++) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	} else if (a % 9 <= 9) {
		for (var i = 73;i<82;i++
		
		) {
			if (sudoku[a] === sudoku[i]) {
				return false;
				{break;}
			} else {
				return true
			}
		}
	}


}

var columnCheck = function(a) {
	if (a % 9 === 1 || a === 1) {
		if (a ===1) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+1] ) {
				return false;

			} else {
				return true;
			}
		} }
	} else if (a % 9 === 2 || a === 2) {
		if (a ===2) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+2]) {
				return false;
			} else {
				return true
			}
		} }
	} else if (a % 9 === 3 || a === 3) {
		if (a ===3) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+3]) {
				return false;
			} else {
				return true
			}
		}}
	} else if (a % 9 === 4 || a === 4) {
		if (a ===4) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+4]) {
				return false;
			} else {
				return true
			}
		}}
	} else if (a % 9 === 5 || a === 5) {
		if (a ===5) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+5]) {
				return false;
			} else {
				return true
			}
		}}
	} else if (a % 9 === 6 || a === 6) {
		if (a ===6) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+6]) {
				return false;
			} else {
				return true
			}
		}}
	} else if (a % 9 === 7 || a === 7) {
		if (a ===7) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+7]) {
				return false;
			} else {
				return true
			}
		}}
	} else if (a % 9 === 8 || a === 8) {
		if (sudoku[a] ===8) {
			return true;
		} else {
		for (var i = 1;i<10;i++) {
			if (sudoku[a] === sudoku[i*9+8]) {
				return false;
			} else {
				return true
			}
		}}
	} else if (a % 9 === 0) {
		for (var i = 1;i<10;i++
		
		) {
			if (sudoku[a] === sudoku[i*9]) {
				return false;
			} else {
				return true
			}
		}
	} }

var boxCheck = function(a) {
	var rS = 0;
	var cS = 0;
	simpleRow(a);
	simpleColumn(a);
	for (var i = 1; i < 10; i ++) {
		if (rS*cS === i) {
			var zone = i;
		}
	}
	if (zone === 1) {
		if (zone1.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 2) {
		if (zone2.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 3) {
		if (zone3.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 4) {
		if (zone4.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 5) {
		if (zone5.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 6) {
		if (zone6.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 7) {
		if (zone7.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 8) {
		if (zone8.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	} else if (zone === 9) {
		if (zone9.indexOf(a) === -1) {
			return true;
		} else {
			return false;
		}
	}
}

var enterNumbers = function() {
	for(var i = 0; i < 81; i++) {
	  if ($('input').eq(i).val().length > 0) {
		$('input').eq(i).addClass('original');
	  }
	}
}

$(document).ready(function() {
	for (var i = 1; i < 82; i++) {
	$('.inputs').append('<input type="text">')
	}
	$('.enter').click(function() {
		enterNumbers()
		initialize()
	})
	$('.start').click(function() {
		initialize()
		var whileloop = true;
		while(whileloop === true) {
		for (var i = 0;i < 82; i++) {
			sudoku[i] + 1;
			if (sudoku[i] === 10) {
				sudoku[i] = 0;
				i - 2;
			} else if (rowCheck(i) && columnCheck(i) && boxCheck(i) && i === 81){
				{break;}
				whileloop = false;
			}
			else if (rowCheck(i) && columnCheck(i) && boxCheck(i)){
			} else {
				i - 2;
			}
		} }
		$('done').append('sudoku')
	}

)} )
