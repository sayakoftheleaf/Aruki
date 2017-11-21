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

var presentmove = 1;

var capturedPieces = {player1 : [], player2 : []};

function makemove(){

}

function makeNonCaptureMove (oldrow, oldcol, newrow, newcol, player, moveBoard) {

	if (moveBoard[newrow][newcol].player != player && moveBoard[newrow][newcol].player != 0){
		if (player === 1){
			capturedPieces.player1 = capturedPieces.player1.concat(moveBoard[newrow][newcol].symbol);	
		} else if (player === 2){
		capturedPieces.player1 = capturedPieces.player2.concat(moveBoard[newrow][newcol].symbol);
		}
	} 

	moveBoard[newrow][newcol].player = moveBoard[oldrow][oldcol].player;
	moveBoard[newrow][newcol].symbol = moveBoard[oldrow][oldcol].symbol;
	moveBoard[oldrow][oldcol].player = 0;
	moveBoard[oldrow][oldcol].symbol = "#";	
};

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
};

/* TODO : Figure out how to do promotions*/
function isValidPromotion() {

};

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
			
			if ( symb === someBoard[a][b].symbol && player === someBoard[a][b].player){

				tempSq.row = a;
				tempSq.col = b;
				return tempSq;
			}
		}
	}

};
