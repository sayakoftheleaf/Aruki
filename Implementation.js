var row = [];

//constructor for a piece
function piece(){};

//array of all possible pieces	
var allpieces = [];

//constructor for a square
var square = function(){};
	// 0 indicates square is empty
	// 1 indicates player is white
	// 2 indicates player is black
	square.prototype.player = 0;
	square.prototype.symbol = "#\t";

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

function print_board() {
	//console.log("here");
	var str = "";
	for(var i = 0; i <= 11; i++)
	{
		for(var j = 0; j <= 11; j++)
		{
			str += row[i][j].symbol;
		}
		str += "\n";
	}
	console.log (str);
};

function init_pieces(){
	allpieces["K"] = new piece;
	allpieces["J"] = new piece;
	allpieces["Mi"] = new piece;
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
	allpieces["K"] = new piece;

};

function computeMoves(var symb, var r, var c, var shouldCheck){

	var tempSquares = [];
	if (symb === "K"){

		var tempr, tempc;

		//case 1
		tempr = r;
		tempc = col - 1;

		var flag = withinBoard(tempr, temp);
		
		flag ? (shouldCheck ? checkForCheck() : var throwaway = "hi") 
					: var throwaway = "hi";
					
		if (flag === true){

			var tempsq  = {
				row : tempr,
				col : tempc
			};
		}
		
	}

};

function isValidMove(var symb, var r, var c, var dr, var dc, var shouldCheck){
	var flag = true;
			flag = withinBoard(dr,dc);
				if (flag === false)
					return false;

			flag = false;
			var tempSquares = computeMoves(symb, r, c, false);
				for (var i = 0; i < tempSquares.length(); i++){
					if (r === tempSquares[i].row) && (c === tempSquares[i].col)
						flag = true;
				}

			if (flag === false)
				return flag;

			//TODO : update the board and pass it to checkForCheck
			var tempboard = 

			var checkForCheck = () 
};

function checkForCheck(){};
function withinBoard(var someRow, var someCol);

window.onload = function(){

	//create_board();
	init_pieces();
	console.log(allpieces);
	//init_board();
	//printboard();
};
