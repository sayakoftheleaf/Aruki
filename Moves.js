/*
	Module - Moves
	Purpose - Calculates potential moves of a piece given the state of a board
	Last Updated - 17th October, 2017

	Things that need to be implemented:

	Tested Functions:

	Untested Functions:
	*/



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

*/

function computeMoves(symb, r, c, shouldCheck, someBoard){

	var tempSquares = [];

	var player = someBoard[r][c].player;

	if (symb === "K"){
		tempSquares = computeKingMoves(r, c, shouldCheck, player);
		
	}

	else if (symb.includes("J")){
		console.log("going back to Jester");
		tempSquares = computeJesterMoves(r, c, shouldCheck, player, someBoard);
		
	}

	else if (symb === "MI"){
		tempSquares = computeMinisterMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "R"){
		tempSquares = computeRookMoves(r, c, shouldCheck, player);
		
	}

	// This is necessary to locate which pawn is being used
	// since they are numbered for the time being

	else if (symb.includes("Z")){

		tempSquares = computePawnMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "A"){
		tempSquares = computeArrowMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "GR"){
		tempSquares = computeGreaterRiverMoves(r, c, shouldCheck, player);
		// TODO : input ways to delete the row or column
		// right now, it is just moving and cannot capture
	}

	else if (symb === "LR"){
		tempSquares = computeLesserRiverMoves(r, c, shouldCheck, player);
		// TODO : input ways to delete the row or column
		// right now, it is just moving and cannot capture
	}

	else if (symb === "L"){
		tempSquares = computeLanceMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "P"){
		tempSquares = computePikeMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "PP"){
		tempSquares = computeGreaterPikeMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "LL"){
		tempSquares = computeGreaterLanceMoves(r, c, shouldCheck, player);
	}

	else if (symb === "S"){
		tempSquares = computeSwordMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "SS"){
		tempSquares = computeLongSwordMoves(r, c, shouldCheck, player);
		
	}

	else if (symb === "N"){
		tempSquares = computeJavelinMoves(r, c, shouldCheck, player);
		
	}

	return tempSquares;
};


function computeKingMoves (r, c, shouldCheck, player){

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag, isWithinBoard;

		//case 1
		tempr = r;
		tempc = c - 1;

		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}
		
		//case 2
		tempr = r;
		tempc = c + 1;
		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		//case 3
		tempr = r - 1;
		tempc = c;
		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		//case 4
		tempr = r - 1;
		tempc = c - 1;

		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		//case 5
		tempr = r - 1;
		tempc = c + 1;
		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		//case 6
		tempr = r + 1;
		tempc = c;
		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		//case 7
		tempr = r + 1;
		tempc = c - 1;
		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		//case 8
		tempr = r + 1;
		tempc = c + 1;
		isWithinBoard = withinBoard(tempr, tempc);
		if (isWithinBoard){
			if (isNotBlockedSquare (r, c, tempr, tempc)){
				pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
			}
			
		}

		return tempSquares;

	};

/* FUNCTION PURPOSE - Calculates all the moves for the Jester

   FUNCTION STATUS - Logically very simple, so should be working when all the other pieces are working.
   - Still needs testing however */

   function jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard){
   	var tsquares = [];

   	isWithinBoard = withinBoard(tempr, tempc);

   	if (isWithinBoard){
   		if(!(tempBoard[tempr][tempc].player === 0) && !((tempBoard[tempr][tempc].symbol === "LR") || (tempBoard[tempr][tempc].symbol === "GR"))){
   			tsquares = tsquares.concat(computeMoves(tempBoard[tempr][tempc].symbol, r, c, shouldCheck, tempBoard));
   		}
   	}  

   	return tsquares; 
   }

   function computeJesterMoves (r, c, shouldCheck, player, tempBoard) {

   	console.log("inside jester");

   	var tempSquares = [];
   	var tempr, tempc;

	//Square to the right
	tempr = r + 1;
	tempc = c;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	

	//Square to the left
	tempr = r - 1;
	tempc = c;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	
	//Square to the top right diagonal
	tempr = r + 1;
	tempc = c - 1;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	

	//Square to the bottom right diagonal
	tempr = r + 1;
	tempc = c + 1;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	

	//Square to the bottom left diagonal
	tempr = r - 1;
	tempc = c + 1;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	

	//Square to the right top right diagonal
	tempr = r - 1;
	tempc = c - 1;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	

	//Square to the bottom
	tempr = r;
	tempc = c + 1;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));
	

	//Square to the top
	tempr = r;
	tempc = c - 1;

	tempSquares = tempSquares.concat(jesterCheck(r, c, tempr, tempc, shouldCheck, tempBoard));

	return tempSquares;

};

/* 
	FUNCTION PURPOSE - Computes the possible moves of the minister

	FUNCTION STATUS - Should work when Rook and Arrow is working perfectly
	*/

	function computeMinisterMoves ( r, c, shouldCheck, player) {

		var tempSquares = [];
		var tempr, tempc; 

		tempSquares = computeRookMoves(r,c, shouldCheck);
		tempSquares = tempSquares.concat(computeArrowMoves(r,c, shouldCheck));

		return tempSquares;

	};


	function computeRookMoves ( r, c, shouldCheck, player) {

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

/* 
	FUNCTION PURPOSE - Computes the moves of 
	*/

	function computePawnMoves ( r, c, shouldCheck, player) {

		var tempSquares = [];
		var tempr, tempc;
		var blockedFlag;

	// This is necessary because pawns can only move in one direction and this 
	// direction differs depending on who is playing

	if (player === 2){

		tempr = r + 1;
		tempc = c;
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (blockedFlag){
			pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
		}
	} else if (player === 1) {
		tempr = r - 1;
		tempc = c;
		blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
		if (blockedFlag){
			pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
		}
	}

	return tempSquares;

};

/* 	FUNCTION PURPOSE - Calculates all the valid diagonal moves for an arrow

FUNCTION STATUS - Probably has SOME bugs. UNTESTED*/
function computeArrowMoves (r, c, shouldCheck, player) {

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

	function computeGreaterRiverMoves (r, c, shouldCheck, player) {}


	function computeLesserRiverMoves (r, c, shouldCheck, player) {}


	function computeLanceMoves (r, c, shouldCheck, player) {

		var tempSquares = [];
		var tempr, tempc;

	//case 1
	tempr = r + 1;
	tempc = c;

	if (withinBoard(tempr, tempc)) {

		if (isNotBlockedSquare (r, c, tempr, tempc)){

			pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
		}
	}

	//case 2
	tempr = r - 1;
	tempc = c;
	if (withinBoard(tempr, tempc)) {
		if (isNotBlockedSquare (r, c, tempr, tempc)){
			pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
		}
	}


	//case 3
	tempr = r;
	tempc = c + 1;
	if (withinBoard(tempr, tempc)) {
		if (isNotBlockedSquare (r, c, tempr, tempc)){
			pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
		}
	}


	//case 4
	tempr = r;
	tempc = c - 1;
	if (withinBoard(tempr, tempc)) {
		if (isNotBlockedSquare (r, c, tempr, tempc)){
			pushSquares(tempr, tempc, shouldCheck, tempSquares, player);
		}
	}
	return tempSquares;
};


function computePikeMoves (r, c, shouldCheck, player) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	//case 1
	tempr = r + 1;
	tempc = c + 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 2
	tempr = r -1;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 3
	tempr = r - 1;
	tempc = c + 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 4
	tempr = r + 1;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
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
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 6
	tempr = r - 2;
	tempc = c + 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 7
	tempr = r + 2;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 8
	tempr = r - 2;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	return tempSquares;
};


function computeGreaterLanceMoves (r, c, shouldCheck, player) {

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
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 7
	tempr = r;
	tempc = c + 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 8
	tempr = r;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	return tempSquares;
};


function computeSwordMoves (r, c, shouldCheck, player){

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	tempSquares = computePikeMoves(r, c, shouldCheck);
	tempSquares = tempSquares.concat(computeLanceMoves(r,c, shouldCheck));

	return tempSquares;
};


function computeLongSwordMoves (r, c, shouldCheck, player) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	tempSquares = computeGreaterPikeMoves(r, c, shouldCheck);
	tempSquares = tempSquares.concat(computeGreaterLanceMoves(r,c, shouldCheck));

	return tempSquares;
};


function computeJavelinMoves (r, c, shouldCheck, player) {

	var tempSquares = [];
	var tempr, tempc;
	var blockedFlag;

	//case 1
	tempr = r;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 2
	tempr = r;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 3
	tempr = r;
	tempc = c - 1;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	//case 1
	tempr = r;
	tempc = c - 2;
	blockedFlag = isNotBlockedSquare (r, c, tempr, tempc);
	if (blockedFlag){
		pushSquares(r, c, tempr, tempc, shouldCheck, tempSquares, player);
	}

	return tempSquares;
};
