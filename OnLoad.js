//document.write ('<script type = "text/javascript" src = "sample_game1.js"></script>');
document.write ('<script type = "text/javascript" src = "positional_testing.js"></script>');


window.onload = function(){

	create_board(row);
	init_board();
	//print_board(row);

	// Prints the initial state of the board
	// Working correctly

	//console.log(row);

	var newboard = copyBoard(row);

	//samplegame1(newboard);

	checkCheck(newboard);
};
