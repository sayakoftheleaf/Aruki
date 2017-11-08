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

/*

Puts a valid move on to the given board

*/

function makeNonCaptureMove (oldrow, oldcol, newrow, newcol, moveBoard) {

	moveBoard[newrow][newcol].player = moveBoard[oldrow][oldcol].player;
	moveBoard[newrow][newcol].symbol = moveBoard[oldrow][oldcol].symbol;
	moveBoard[oldrow][oldcol].player = 0;
	moveBoard[oldrow][oldcol].symbol = "#";	
};

/* 	TODO : Cancel out the moves that cause checks if they are actually played.*/

/* 	TODO : Figure out if shouldCheck should actually be a thing. Right now it 
	looks a little unnecessary to me. Every time you check if a move is valid,
	you check for checks.*/

function pushSquares( tempr, tempc, shouldCheck, tSquares, player){

	console.log("entered pushSquares");
	console.log(shouldCheck);

	var tempB = copyBoard(row);
	
	// temporary fix
	flag = true;
	
	flag = flag ? (shouldCheck ? checkForCheck(tempB, player) : flag) 
					: flag;

	//console.log ("flag is " + flag);
					
	if (flag)	{
		var tempsq  = {
				row : tempr,
				col : tempc
			};
		tSquares.push(tempsq);
	}
};

function isValidMove(symb, r, c, dr, dc, shouldCheck, formalBoard){
	var flag = true;
	
	flag = withinBoard(dr,dc);
	
	if (!flag){
		return false;
	}
	
	flag = false;
	var tempSquares = computeMoves(symb, r, c, false, formalBoard);
	
	for (var i = 0; i < tempSquares.length; i++){
		if ((dr === tempSquares[i].row) && (dc === tempSquares[i].col))
		flag = true;
	}

	if (!flag)
		return false;
	else 
		return true;
};

/*	TODO : Figure out how to do evolutions*/
function computeEvolution(symbol1, symbol2){
	// greater pike evolution
	if	(symbol1 === "P" && symbol2 === "P")
		return "PP";
	// greater lance evolution
	else if (symbol1 === symbol2 && symbol2 === "L")
		return "LL";
	// Sword evolution
	else if (symbol1 === "P" && symbol2 === "L")
		return "S";
	else if (symbol2 === "P" && symbol1 === "L")
		return "S";
	// Long sword evolution
	else if (symbol1 === "S" && symbol2 === "S")
		return "SS";
	else if (symbol1 === "PP" && symbol2 === "LL")
		return "SS";
	else if (symbol1 === "LL" && symbol2 === "PP")
		return "SS";
	// Javelin evolution
	else if  (symbol1 === "Z" && symbol2 === "Z")
		return "N";
	// Minister evolution
	else if (symbol1 === "R" && symbol2 === "A")
		return "MI";
	else if (symbol2 === "A" && symbol2 === "R")
		return "MI";
};

/* TODO : Figure out how to do promotions*/
function isValidPromotion() {};

function checkForCheck(tempBoard, player){

	var tempsq = positionOf("K", tempBoard, player);

	for (var a = 0; a <= 11; a++){

		for (var b = 0; b <= 11; b++){

				if ( tempBoard[a][b].player != 0 && tempBoard[a][b].player != player){


				}
		
		}
	}
};

/* 	FUNCTION PURPOSE - Finds out if the move is within the board

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
	FUNCTION PURPOSE -  Finds the position of a piece of a side and
			returns an object comprised of the row and column.

	RETURNTYPE : OBJECT

	FUNCTION STATUS - WORKING AS INTENDED.
*/
function positionOf(symb, someBoard, player) {

	//print_board(someBoard);

	var tempSq = {};

	for ( var a = 0; a <= 11; a++) {
		for (var b = 0; b <= 11; b++) {
			
			if ( symb === someBoard[a][b].symbol && player === someBoard[a][b].player){

				tempSq.row = a;
				tempSq.col = b;
				return tempSq;
			}
		}
	}

};
