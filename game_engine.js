console.log ("in_game_engine.js");

/*

	TODO : Figure out if you actually need this
function init_pieces(){
	allpieces["K"] = new piece;
	allpieces["J"] = new piece;
	allpieces["MI"] = new piece;
	allpieces["R"] = new piece;
	allpieces["Z"] = new piece;
	allpieces["A"] = new piece;
	allpieces["GR"] = new piece;
	allpieces["LR"] = new piece;
	allpieces["L"] = new piece;
	allpieces["P"] = new piece;
	allpieces["PP"] = new piece;
	allpieces["LL"] = new piece;
	allpieces["S"] = new piece;
	allpieces["SS"] = new piece;
	allpieces["N"] = new piece;

};

*/

/*	TODO : Figure out what to do to make sure you don't move other
	pieces when your King is in Check*/

function makeMove (symb, r, c) {};

/* 	TODO : Cancel out the moves that cause checks if they are actually played.*/

/* 	TODO : Figure out if shouldCheck should actually be a thing. Right now it 
	looks a little unnecessary to me. Every time you check if a move is valid,
	you check for checks.*/

function pushSquares( tempr, tempc, shouldCheck, tSquares, player){

	var tempB = copyBoard(row);


		
		flag = flag ? (shouldCheck ? checkForCheck(tempB, player) : flag) 
					: flag;
					
		if (flag)	{

			var tempsq  = {
					row : tempr,
					col : tempc
				};
			tSquares.push(tempsq);
		}
};


function isValidMove(symb, r, c, dr, dc, shouldCheck){
	var flag = true;
			flag = withinBoard(dr,dc);
				if (flag === false){
					return false;
				}

			flag = false;
			var tempSquares = computeMoves(symb, r, c, false);
				for (var i = 0; i < tempSquares.length(); i++){
					if ((dr === tempSquares[i].row) && (dc === tempSquares[i].col))
						flag = true;
				}

			if (flag === false)
				return flag;
			else 
				return true;
};


/* 	FUNCTION PURPOSE - Deep copies a Board into a new Array

	FUNCTION STATUS - Copied Logic from StackOverflow so should work. UNTESTED.
*/

function copyBoard (originalBoard){

	var newBoard = [];

	for (a = 0; a < originalBoard.length; a++){

		newBoard[a] = originalBoard[a].splice();
	}

	return newBoard;
};

/*	TODO : Figure out how to do evolutions*/
function isValidEvolution(){};

/* TODO : Figure out how to do promotions*/
function isValidPromotion() {};

function checkForCheck(tempBoard, player){

	var tempsq = positionOf("K", tempboard, player);

	for (var a = 0; a <= 11; a++){

		for (var b = 0; b <= 11; b++){

				if ( tempBoard[a][b].player != 0 && tempBoard[a][b].player != player){


				}
		
		}
	}



};

/* 	FUNCTION PURPOSE - Finds out if the move is within the board

	FUNCTION STATUS - Probably bug free. UNTESTED.	
*/
function withinBoard(someRow, someCol) {

	if ((someRow <= 11) && (someRow >= 0)) {
		if ((someCol <= 11) && (someCol >= 0)) {
			return true;
		}
		return false;
	}
};


/*	
	FUNCTION PURPOSE -  Finds the position of a piece of a side and
			returns an object comprised of the row and column.

	FUNCTION STATUS - COMPLETELY UNTESTED. MAY BE FILLED WITH BUGS.
*/
function positionOf( symb, someBoard, player) {

	symb = symb. concat ("\t");

	var tempSq = {};

	for ( var a = 0; a <= 11; a++) {
		for (var b = 0; b <= 11; b++) {
			
			if ( symb === someBoard[a][b] && player === someBoard[a][b].player){

				tempSq.row = a;
				tempSq.col = b;
				return tempSq;
			}
		}
	}

};
