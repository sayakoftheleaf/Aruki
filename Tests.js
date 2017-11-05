// Prints the current state of the board to the screen
// Does not affect the values of the board passed
function print_board(tempBoard){
	var str = "";

	for(var i = 0; i <= 11; i++)
	{
		for(var j = 0; j <= 11; j++)
		{
			str += tempBoard[i][j].symbol + "\t";
		}
		str += "\n";
	}
	console.log (str);
};

function printPlayerConfig(tempBoard){
	var str = "";

	for(var i = 0; i <= 11; i++)
	{
		for(var j = 0; j <= 11; j++)
		{
			str += tempBoard[i][j].player + "\t";
		}
		str += "\n";
	}
	console.log (str);

};

function test_evolution(){
	console.log(Evolution("P", "P"));
};
