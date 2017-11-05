window.onload = function(){

	create_board(row);
	init_board();
	//print_board(row);

	// Prints the initial state of the board
	// Working correctly

	//console.log(row);

	var newboard = copyBoard(row);
	//console.log(newboard);
	//print_board(newboard);
	//console.log(withinBoard(10,11));
	//console.log(positionOf("J", newboard, 1));

	// first move
	var firstpawn = positionOf("Z5", newboard, 1);
	var somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
	makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
	

	print_board(newboard);

	// second move
	firstpawn = positionOf("Z2", newboard, 2);
	somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 2);
	makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
	

	print_board(newboard);

	// third move
	firstpawn = positionOf("Z5", newboard, 1);
	somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
	makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
	
	
	print_board(newboard);

	// fourth move
	firstpawn = positionOf("L1", newboard, 2);
	somemove = computeLanceMoves(firstpawn.row, firstpawn.col, false, 2);
	makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

	
	print_board(newboard);

	// fourth move
	firstpawn = positionOf("K", newboard, 1);
	somemove = computeKingMoves(firstpawn.row, firstpawn.col, false, 1);
	makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

	print_board(newboard);

	firstpawn = positionOf("Z0", newboard, 1);
	console.log(isValidMove("Z0", firstpawn.row, firstpawn.col, firstpawn.row-1, firstpawn.col, false, newboard));
	//test_evolution();
};
