window.onload = function(){

	create_board(row);
	init_board();

	// Prints the initial state of the board
	// Working correctly

	//console.log(row);

	var newboard = copy_board(row);
	//console.log(newboard);
	print_board(newboard);
	//console.log(withinBoard(10,11));
	console.log(positionOf("J", newboard, 1));
};
