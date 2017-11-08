document.write ('<script type = "text/javascript" src = "sample_game1.js"></script>');

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

	samplegame1(newboard);

	//test_evolution();
};
