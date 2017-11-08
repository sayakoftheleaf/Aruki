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
square.prototype.symbol = "#";

/* 
	FUNCTION PURPOSE - creates the initial empty board
*/

function create_board(board) {
	
	for(var i = 0; i <= 11; i++)
	{
		var col = [];
		for(var j = 0; j <= 11; j++)
		{
			col[j] = new square;
		}

	board[i] = col;
	}

};


/* 	
	FUNCTION PURPOSE - Initializes the board with the starting position
 	of the pieces
*/

function init_board() {
	//Rooks
	row[0][0].symbol = "R1";
	row[11][0].symbol = "R1";
	row[0][11].symbol = "R2";
	row[11][11].symbol = "R2";

	//Arrows
	row[0][1]. symbol = "A1";
	row[0][10].symbol = "A2";
	row[11][1].symbol = "A1";
	row[11][10].symbol = "A2";
	
	//Lances
	row[0][2].symbol = "L1";
	row[0][9].symbol = "L2";
	row[11][9].symbol = "L1";
	row[11][2].symbol = "L2";
	

	//Pikes
	row[0][3].symbol = "P1";
	row[0][8].symbol = "P2";
	row[11][3].symbol = "P1";
	row[11][8].symbol = "P2";

	//Lesser Rivers
	row[0][4].symbol = "LR";
	row[11][4].symbol = "LR";

	//Greater Rivera
	row[0][7].symbol = "GR";
	row[11][7].symbol = "GR";

	//Kings
	row[0][5].symbol = "K";
	row[11][5].symbol = "K";

	//Jesters
	row[0][6].symbol = "J";
	row[11][6].symbol = "J";

	//setting up pawns and the player alignment
	for(var i = 0; i <= 11; i++)
	{
		//setting up pawns
		row[1][i].symbol = "Z" + i.toString();
		row[10][i].symbol = "Z" + i.toString();

		//aligning initial pieces to the players they belong to
		row[1][i].player = 2;
		row[0][i].player = 2;
		row[10][i].player = 1;
		row[11][i].player = 1;
	}
};

/* 	FUNCTION PURPOSE - Deep copies a Board into a new Array

	FUNCTION STATUS - Copied Logic from StackOverflow so should work. UNTESTED.
*/

function copyBoard(originalBoard) {
	
	//console.log(originalBoard);

	var newBoard = [];
	for(var i = 0; i <= 11; i++)
	{
		var tempcol = [];
		for(var j = 0; j <= 11; j++)
		{
			tempcol[j] = originalBoard[i][j];
		}

	newBoard[i] = tempcol;
	}

	return newBoard;
};


