var row = [];

/*	
	FUNCTION PURPOSE - constructor for a piece
*/
function piece(){};

/* 
	array of all possible pieces	
*/
var allpieces = [];


/* 
	FUNCTION PURPOSE - constructor for a square
*/
var square = function(){};
	
// 0 indicates square is empty
// 1 indicates player is white
// 2 indicates player is black
square.prototype.player = 0;
square.prototype.symbol = "#\t";


/* 
	FUNCTION PURPOSE - creates the initial empty board
*/

function create_board() {
	
	for(var i = 0; i <= 11; i++)
	{
		var col = [];
		for(var j = 0; j <= 11; j++)
		{
			col[j] = new square;
		}

	row[i] = col;
	}

};


/* 	FUNCTION PURPOSE - Initializes the board with the starting position
 	of the pieces 	*/

function init_board() {
	//Rooks
	row[0][0].symbol = "R\t";
	row[11][0].symbol = "R\t";
	row[0][11].symbol = "R\t";
	row[11][11].symbol = "R\t";

	//Arrows
	row[0][1]. symbol = "A\t";
	row[0][10].symbol = "A\t";
	row[11][1].symbol = "A\t";
	row[11][10].symbol = "A\t";
	
	//Lances
	row[0][2].symbol = "L\t";
	row[0][9].ssymbol = "L\t";
	row[11][2].symbol = "L\t";
	row[11][9].symbol = "L\t";

	//Pikes
	row[0][3].symbol = "P\t";
	row[0][8].symbol = "P\t";
	row[11][3].symbol = "P\t";
	row[11][8].symbol = "P\t";

	//Lesser Rivers
	row[0][4].symbol = "LR\t";
	row[11][4].symbol = "LR\t";

	//Greater Rivera
	row[0][7].symbol = "GR\t";
	row[11][7].symbol = "GR\t";

	//Kings
	row[0][5].symbol = "K\t";
	row[11][5].symbol = "K\t";

	//Jesters
	row[0][6].symbol = "J\t";
	row[11][6].symbol = "J\t";

	//setting up pawns and the player alignment
	for(var i = 0; i <= 11; i++)
	{
		//setting up pawns
		row[1][i].symbol = "Z\t";
		row[10][i].symbol = "Z\t";

		//aligning initial pieces to the players they belong to
		row[1][i].player = 2;
		row[0][i].player = 2;
		row[10][i].player = 1;
		row[11][i].player = 1;
	}
};

// Prints the current state of the board to the screen
// Does not affect the values of the board passed
function print_board(tempBoard){
	//console.log("here");
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


function gameEngine(){

	create_board();
	init_board();

	print_board (row);

};

window.onload = function(){

	gameEngine();
};
