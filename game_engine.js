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
function computeMoves( symb, r, c, shouldCheck){

	var tempSquares = [];
	if (symb === "K"){
		tempSquares = tempSquares.concat(computeKingMoves(r, c, shouldCheck));
		
	}

	if (symb === "J"){
		tempSquares = computeJesterMoves(r, c, shouldCheck);
		
	}

	if (symb === "MI"){
		tempSquares = computeMinisterMoves(r, c, shouldCheck);
		
	}

	if (symb === "R"){
		tempSquares = computeRookMoves(r, c, shouldCheck);
		
	}

	if (symb === "Z"){
		tempSquares = computePawnMoves(r, c, shouldCheck);
		
	}

	if (symb === "A"){
		tempSquares = computeArrowMoves(r, c, shouldCheck);
		
	}

	if (symb === "GR"){
		tempSquares = computeGreaterRiverMoves(r, c, shouldCheck);
		// TODO : input ways to delete the row or column
		// right now, it is just moving and cannot capture
	}

	if (symb === "LR"){
		tempSquares = computeLesserRiverMoves(r, c, shouldCheck);
		// TODO : input ways to delete the row or column
		// right now, it is just moving and cannot capture
	}

	if (symb === "L"){
		tempSquares = computeLanceMoves(r, c, shouldCheck);
		
	}

	if (symb === "P"){
		tempSquares = computePikeMoves(r, c, shouldCheck);
		
	}

	if (symb === "PP"){
		tempSquares = computeGreaterPikeMoves(r, c, shouldCheck);
		
	}

	if (symb === "LL"){
		tempSquares = computeGreaterLanceMoves(r, c, shouldCheck);
	}

	if (symb === "S"){
		tempSquares = computeSwordMoves(r, c, shouldCheck);
		
	}

	if (symb === "SS"){
		tempSquares = computeLongSwordMoves(r, c, shouldCheck);
		
	}

	if (symb === "N"){
		tempSquares = computeJavelinMoves(r, c, shouldCheck);
		
	}
};


function computeKingMoves (r, c, shouldCheck){

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag, isWithinBoard;

		//case 1
		tempr = r;
		tempc = c - 1;

		isWithinBoard = withinBoard(tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}
		
		//case 2
		tempr = r;
		tempc = c + 1;
		isWithinBoard = withinBoard(tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}

		//case 3
		tempr = r - 1;
		tempc = c;
		isWithinBoard = withinBoard(tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}

		//case 4
		tempr = r - 1;
		tempc = c - 1;
		isWithinBoard = withinBoard(tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}

		//case 5
		tempr = r - 1;
		tempc = c + 1;
		isWithinBoard = withinBoard (tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}


		//case 6
		tempr = r + 1;
		tempc = c;
		isWithinBoard = withinBoard (tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}

		//case 7
		tempr = r + 1;
		tempc = c - 1;
		isWithinBoard = withinBoard(tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}

		//case 8
		tempr = r + 1;
		tempc = c + 1;
		isWithinBoard = withinBoard(tempr, tempc);
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (isWithinBoard && blockedFlag){
			pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
		}

		return tempSquares;

};

function computeJesterMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
};


function computeMinisterMoves ( r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc; 

	tempSquares = computeRookMoves(r,c, shouldCheck);
	tempSquares = tempSquares.concat(computeArrowMoves(r,c, shouldCheck));

	return tempSquares;

};


function computeRookMoves ( r, c, shouldCheck) {

	var tempSquares = [];

	var counter = 1;

	/* Ascending cols*/
	while ( row[r][c + counter].player != row[r][c].player  
			&& (c + counter) <= 11)
	{
		pushSquares (r, c, r, c + counter, shouldCheck, tempSquares);

		counter++;
	}

	counter = 1;
	
	/* Descending cols*/
	while ( row[r][c - counter].player != row[r][c].player  
			&& (c - counter) >= 0)
	{
		pushSquares (r, c, r, c - counter, shouldCheck, tempSquares);

		counter++;
	}

	counter = 1;
	/* Ascending rows*/
	while ( row[r + counter][c].player != row[r][c].player 
			&& (r + counter) <= 11)
	{
		pushSquares (r, c, r - counter, c - counter, shouldCheck, tempSquares);

		counter++;
	}

	counter = 1;
	/* Descending rows*/
	while ( row[r - counter][c].player != row[r][c].player 
			&& (r - counter) >= 0)
	{
		pushSquares (r, c, r - counter, c - counter, shouldCheck, tempSquares);

		counter++;
	}

	return tempSquares;
};


function computePawnMoves ( r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	//case 1
	tempr = r + 1;
	tempc = c;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	return tempSquares;

};

/* 	FUNCTION PURPOSE - Calculates all the valid diagonal moves for an arrow

	FUNCTION STATUS - Probably has SOME bugs. UNTESTED*/
function computeArrowMoves (r, c, shouldCheck) {

	var tempSquares = [];

	var counter = 1;

	/*	Not handling the lower end cases because there is no way the value 
		of r + counter or c+ counter is ever less than 0 
	*/
	while ( row[r + counter][c + counter].player != row[r][c].player 
			&& (r + counter)<=11 
			&& (c + counter)<=11)
	{
		pushSquares (r, c, r + counter, c + counter, shouldCheck, tempSquares);

		counter++;
	}

	counter = 1;

	/* 	Not handling the upper end cases because there is no way the value 
		of r - counter or c - counter is ever greater than 11
	*/
	while ( row[r - counter][c - counter].player != row[r][c].player 
			&& (r - counter)>=0 
			&& (c - counter)>=0)
	{
		pushSquares (r - counter, c - counter, shouldCheck, tempSquares);

		counter++;
	}

	return tempSquares;
};

/* TODO : Compute the River Capturing Mechanism. Actually code all of the Rivers.*/

function computeGreaterRiverMoves (r, c, shouldCheck) {}


function computeLesserRiverMoves (r, c, shouldCheck) {}


function computeLanceMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	//case 1
	tempr = r + 1;
	tempc = c;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 2
	tempr = r -1;
	tempc = c;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 3
	tempr = r;
	tempc = c + 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 4
	tempr = r;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	return tempSquares;
};


function computePikeMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	//case 1
	tempr = r + 1;
	tempc = c + 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 2
	tempr = r -1;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 3
	tempr = r - 1;
	tempc = c + 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 4
	tempr = r + 1;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	return tempSquares;
};


function computeGreaterPikeMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	tempSquares = computePikeMoves(r,c,shouldCheck);

	//case 5
	tempr = r + 2;
	tempc = c + 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 6
	tempr = r - 2;
	tempc = c + 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 7
	tempr = r + 2;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 8
	tempr = r - 2;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	return tempSquares;
};


function computeGreaterLanceMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	tempSquares = computeLanceMoves (r, c, shouldCheck);

	//case 5
	tempr = r + 2;
	tempc = c;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares( r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 6
	tempr = r -2;
	tempc = c;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 7
	tempr = r;
	tempc = c + 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 8
	tempr = r;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	return tempSquares;
};


function computeSwordMoves (r, c, shouldCheck){

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	tempSquares = computePikeMoves(r, c, shouldCheck);
	tempSquares = tempSquares.concat(computeLanceMoves(r,c, shouldCheck));

	return tempSquares;
};


function computeLongSwordMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	tempSquares = computeGreaterPikeMoves(r, c, shouldCheck);
	tempSquares = tempSquares.concat(computeGreaterLanceMoves(r,c, shouldCheck));

	return tempSquares;
};


function computeJavelinMoves (r, c, shouldCheck) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	//case 1
	tempr = r;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 2
	tempr = r;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 3
	tempr = r;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	//case 1
	tempr = r;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares);
	}

	return tempSquares;
};



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

/*	TODO : Figure out how to do evolution shit. You still have no fucking clue*/
function isValidEvolution(){};

/* TODO : Figure out how to do promotions. You have no fucking idea*/
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

/* 	FUNCTION PURPOSE - Checks if the square in which the piece is trying to move to is 
	occupied by a piece of the same side

	FUNCTION STATUS - Probably bug free. UNTESTED.	
*/

function isNotBlockedSquare (r, c, tempr, tempc) {

	var flag;
	row[r][c].player === row[tempr][tempc].player ? flag = false : flag = true;

	return flag;
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
