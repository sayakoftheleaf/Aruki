
/*	TODO : Figure out what to do to make sure you don't move other
pieces when your King is in Check*/

/*

Puts a valid move on to the given board

*/

var presentmove = 1;

var capturedPieces = {player1 : [], player2 : []};

var playermove = 1;

function makemove(){

}

function makeNonCaptureMove (oldrow, oldcol, newrow, newcol, player, moveBoard) {

	if (moveBoard[newrow][newcol].player != player && moveBoard[newrow][newcol].player != 0){
		if (!
			(moveBoard[newrow][newcol].symbol.includes("J") ||
				moveBoard[newrow][newcol].symbol.includes("GR") ||
				moveBoard[newrow][newcol].symbol.includes("LR") ||
				moveBoard[newrow][newcol].symbol.includes("N") ||
				moveBoard[newrow][newcol].symbol.includes("SS") ||
				moveBoard[newrow][newcol].symbol.includes("MI"))){
			if (player === 1){
				capturedPieces.player1 = capturedPieces.player1.concat(moveBoard[newrow][newcol].symbol);
				console.log(capturedPieces);

			} else if (player === 2){
				capturedPieces.player2 = capturedPieces.player2.concat(moveBoard[newrow][newcol].symbol);
				console.log(capturedPieces);
			}
		}
	}

	moveBoard[newrow][newcol].player = moveBoard[oldrow][oldcol].player;
	moveBoard[newrow][newcol].symbol = moveBoard[oldrow][oldcol].symbol;
	moveBoard[oldrow][oldcol].player = 0;
	moveBoard[oldrow][oldcol].symbol = "#";
};

function removeCaptured(symb, player){

	if(player === 1)
		tempobj = capturedPieces.player1;
	else if (player === 2)
		tempobj = capturedPieces.player2;

	for(var a = 0; a <= tempobj.length; a++){
		if (tempobj[a].includes(symb)){
			tempobj.splice(a,1);
			return;
		}
	}
}

/* 	TODO : Cancel out the moves that cause checks if they are actually played.*/

/* 	TODO : Figure out if shouldCheck should actually be a thing. Right now it
	looks a little unnecessary to me. Every time you check if a move is valid,
	you check for checks.*/

	function pushSquares(tempr, tempc, tSquares, player){

		var tempsq = {
			row : tempr,
			col : tempc
		};

		tSquares.push(tempsq);
	};

	function isValidMove(symb, r, c, dr, dc, formalBoard, tempSquares){
		var flag = true;

		flag = withinBoard(dr,dc);

		if (!flag){
			return false;
		}

		flag = false;
		for (var i = 0; i < tempSquares.length; i++){
			if ((dr === tempSquares[i].row) && (dc === tempSquares[i].col))
				flag = true;
		}

		if (!flag)
			return false;
		else
			return true;
	};

	function evolvePiece(r, c, symbol1, symbol2, someBoard){

		if(someBoard[r][c].symbol.includes(symbol1)){

			var tempcaptures = someBoard[r][c].player === 1? capturedPieces.player1 : capturedPieces.player2;

			for(var a = 0; a < tempcaptures.length; a++){

				if(tempcaptures[a].includes(symbol2)){
					someBoard[r][c].symbol = computeEvolution(symbol1, symbol2);
					tempcatures = tempcaptures.slice(a, 1);
				}
			}
		}
	};

	function computeEvolution(symbol1, symbol2){
	// greater pike evolution
	if	(symbol1.includes("P") && symbol2.includes("P"))
		return "PP";
	// greater lance evolution
	else if (symbol1.includes("L") && symbol2.includes("L"))
		return "LL";
	// Sword evolution
	else if (symbol1.includes("L") && symbol2.includes("P"))
		return "S";
	else if (symbol1.includes("P") && symbol2.includes("L"))
		return "S";
	// Long sword evolution
	else if (symbol1.includes("S") && symbol2.includes("S"))
		return "SS";
	else if (symbol1.includes("PP") && symbol2.includes("LL"))
		return "SS";
	else if (symbol1.includes("LL") && symbol2.includes("PP"))
		return "SS";
	// Javelin evolution
	else if (symbol1.includes("Z") && symbol2.includes("Z"))
		return "N";
	// Minister evolution
	else if (symbol1.includes("R") && symbol2.includes("A"))
		return "MI";
	else if (symbol1.includes("A") && symbol2.includes("R"))
		return "MI";

	// This is the default return if no valid evolutions are found
	return symbol2;
};

/* TODO : Figure out how to do promotions */

/*
  FUNCTION PURPOSE - Returns all the valid promotions available when a pawn or
	a Javelin reaches a specific Square

	Input - present row, present column, the symbol of the piece,
	the board, the player

	FUNCTION STATUS - WORKING AS INTENDED
*/

function ValidPromotions(row, col, symbol, someBoard, player) {
	var obj = {};
	if (symbol.includes("Z") || symbol.includes("N")){
		if (player === 1){
			if (row === 2) {
				obj =
					{isValid : true,
					 ValidPromotions : ["N", "P", "L"]
					};
			} else if (row === 1){
				obj =
					{isValid : true,
					 ValidPromotions : ["N", "P", "L", "PP", "LL", "S"]
					};

			} else if (row === 0){
				obj =
					{isValid : true,
					 ValidPromotions : ["N", "P", "L", "PP", "LL", "S", "SS", "A", "R", "M"]
					};
			}
		}
		else if (player === 2){
			if (row === 9) {
				obj =
					{isValid : true,
					 ValidPromotions : ["N", "P", "L"]
					};
			} else if (row === 10){
				obj =
					{isValid : true,
					 ValidPromotions : ["N", "P", "L", "PP", "LL", "S"]
					};

			} else if (row === 11){
				onj =
					{isValid : true,
					 ValidPromotions : ["N", "P", "L", "PP", "LL", "S", "SS", "A", "R", "M"]
					};
			}
		}
	}
	else obj = {isValid : false};

	return obj;
};

/*
  FUNCTION PURPOSE - Finds out if the King is in check. Returns true if he is,
	false otherwise.

	FUNCTION STATUS - WORKING AS INTENDED
*/


function checkForCheck(someBoard, player){

	var tempsq = positionOf("K", someBoard, player);

	for (var a = 0; a <= 11; a++){

		for (var b = 0; b <= 11; b++){

			if (someBoard[a][b].player !== 0 && someBoard[a][b].player !== player){

				var tempSquares = computeMoves(someBoard[a][b].symbol, a, b, someBoard);
				//if(someBoard[a][b].symbol === )
				for(var x = 0; x < tempSquares.length; x++){
					if (tempSquares[x].row === tempsq.row && tempSquares[x].col === tempsq.col){
						return true;
					}
				}

			}

		}
	}

	return false;
};

/*
  FUNCTION PURPOSE - Finds out if the move is within the board

	FUNCTION STATUS - WORKING AS INTENDED
*/

	function withinBoard(someRow, someCol) {

		if ((someRow <= 11) && (someRow >= 0)) {
			if ((someCol <= 11) && (someCol >= 0)) {
				return true;
			}
			return false;
		} else
		return false;
	};


/*
	FUNCTION PURPOSE - Finds the position of a piece of a side and
			returns an object comprised of the row and column.

	RETURNTYPE : OBJECT

	FUNCTION STATUS - WORKING AS INTENDED.

*/

	function positionOf(symb, someBoard, player) {

	//print_board(someBoard);

	var tempSq = {};

	for ( var a = 0; a <= 11; a++) {
		for (var b = 0; b <= 11; b++) {

			if (someBoard[a][b].symbol.includes(symb) && player === someBoard[a][b].player){

				tempSq.row = a;
				tempSq.col = b;
				return tempSq;
			}
		}
	}

};

function flipplayermove(){
	if (playermove === 1)
		playermove = 2;
	else if (playermove === 2)
		playermove = 1;

};
