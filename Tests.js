console.log("inside Test.js")

// Prints the current state of the board to the screen
// Does not affect the values of the board passed
function print_board(tempBoard){
	//console.log(tempBoard);
	var str = "";

	for(var i = 0; i <= 11; i++)
	{
		for(var j = 0; j <= 11; j++)
		{
			str += tempBoard[i][j].symbol;
		}
		str += "\n";
	}
	console.log (str);
};

