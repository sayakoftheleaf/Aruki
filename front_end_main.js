$(document).ready(function(){

	create_board(row);
	init_board();

	setupBoard();
	cssSquare();
	refreshSquares(false);
	putPieces(row);

	var playermove = 1;
	var selected = {
		symbol : "#",
		row : -1,
		col : -1
	};
	var tempSquares = [];
	
	$(".Square").click(function(){
		temp = highlightcontrol($(this), playermove, selected, tempSquares);
		playermove = temp[0];
		selected = temp[1];
		tempSquares = temp[2];
	});
});

function highlightcontrol(square, playermove, selected, tempSquares){
	var Row = square.parent().attr('class');
	var Col = square.attr('class');
	Row = Row.substring(3);
	Col = Col.substring(10);

	var numrow = Number(Row);
	var numcol = Number(Col);

	if(selected.symbol === "#"){
		console.log("clicked empty");
		var symb = row[numrow][numcol].symbol;

		if(row[numrow][numcol].player === playermove){
			selected.symbol = symb;
			selected.row = numrow;
			selected.col = numcol;

			refreshSquares(false);
			tempSquares = computeMoves(symb, numrow, numcol, row);
			highlightpieces(tempSquares);
			return [playermove, selected, tempSquares];
		} else return [playermove, selected, tempSquares];
	} else {
		console.log(" in else");
		if (isValidMove(selected.symbol, selected.row, selected.col, numrow, numcol, row, tempSquares)){
			makeNonCaptureMove (selected.row, selected.col, numrow, numcol, playermove, row);
			selected.symbol = "#";
			selected.row = -1;
			selected.col = -1;

			if (playermove === 1) 
				playermove = 2;
			else if (playermove === 2)
				playermove = 1;
			
			refreshSquares(true);
			putPieces(row);
			return [playermove, selected, []];
		} else if (row[numrow][numcol].symbol === "#"){
			console.log("detected blank");
			return [playermove, selected, []];
		} else if (row[numrow][numcol].player === playermove){

			console.log("detected diff");
			selected.symbol = row[numrow][numcol].symbol;
			selected.row = numrow;
			selected.col = numcol;

			refreshSquares(false);
			tempSquares = computeMoves(selected.symbol, selected.row, selected.col, row);
			highlightpieces(tempSquares);
			return [playermove, selected, tempSquares];
		} else {
			console.log("detected opponent piece");
			refreshSquares(false);
			selected.symbol = "#";
			selected.row = -1;
			selected.col = -1;
			return [playermove, selected, []];
		}
	}
}

function setupBoard(){
	for(var a = 0; a < 12; a++){
		var classa = "Row" + a;
		var divstring = "<div class=\"" + classa + "\"></div>"
		$(".Board").append(divstring);
		$("." + classa).css({"display":"block",
			"margin" : "0px",
		});
		for (var b = 0; b < 12; b++){
			var strcol = "Col" + b;
			$("." + classa).append("<div class=\"Square " + strcol + "\"></div>");
		}
	}
};

function cssSquare(){
	$(".Board").css({
		"line-height": "0px",
		"background-image": "url(Files/Board_sample.png)",
		"background-repeat": "no-repeat"
	});

	$(".Square").css({
		"border" : "4px solid #997E5A00",
		"height":"48px",
		"width":"48px",
		"display":"inline-block",
		"box-sizing": "border-box"
	});

};

function refreshSquares(deletenodes){
	var rowflag = false;
	for(var a = 0; a < 12; a++){
		
		if (rowflag)
			color = true;
		else 
			color = false;

		var classa = "Row" + a;

		for (var b = 0; b < 12; b++){

			var divstring = "." + classa + " .Col" + b;
			if (color){
				$(divstring).css({"background-color": "#9F661400",
					"border-color":"#9F661400"
				});

				if (deletenodes)
					$(divstring).empty();
			}
			else {
				$(divstring).css({"background-color":"#BE925300",
					"border-color":"#BE925300"
				});

				if (deletenodes)
					$(divstring).empty();

			}


			color = !color
		}

		rowflag = !rowflag;
	}
}

function putPieces(someBoard){
	for(var row = 0 ; row < 12; row++){
		for(var col = 0 ; col < 12; col++){
			
			var classstr = ".Row" + row + " .Col" + col;
			$(classstr).append("<div class=\"Piece\"></div>");
			$(".Piece").css({
				"height" : "32px",
				"width":"32px", 
				"margin":"auto", 
				"margin-top":"6px"});

			var symb = someBoard[row][col].symbol;
			var player = someBoard[row][col].player;

			if (symb === "K"){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -192px -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -192px -32px",
					});
				}

			}
			else if (symb.includes("J")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -64px -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -64px -32px",
					});
				}
			}
			else if (symb === "MI"){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -96px -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -96px -32px",
					});
				}
			}
			else if (symb.includes("Z")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -32px -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -32px -32px",
					});
				}
			}
			else if (symb.includes("A")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -128px 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -128px 0",
					});
				}
			}
			else if (symb === "GR"){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -32px 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -32px 0",
					});
				}
			}
			else if (symb === "LR"){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') 0 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') 0 0",
					});
				}
			}	
			else if (symb.includes("R")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -160px -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -160px -32px",
					});
				}
			}
			else if (symb.includes("PP")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -64px 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -64px 0",
					});
				}
			}
			else if (symb.includes("P")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -96px 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -96px 0",
					});
				}
			}
			else if (symb.includes("LL")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -192px 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -192px 0",
					});
				}
			}
			else if (symb.includes("L")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') -224px 0",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -224px 0",
					});
				}
			}
			else if (symb.includes("SS")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') 0 -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png')  0 -32px",
					});
				}

			}
			else if (symb.includes("S")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png') 0 -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png')  0 -32px",
					});
				}
			}
			else if (symb.includes("N")){
				if (player === 1){
					$(classstr + " .Piece").css({
						"background" : "url('Files/White_sprites.png')-128px -32px",
					});
				} else if (player === 2){
					$(classstr + " .Piece").css({
						"background" : "url('Files/Black_sprites.png') -128px -32px",
					});
				}
			}
		}
	}
};

function highlightpieces(moves){
	
	for (var a = 0; a < moves.length; a++){
		var divstring = ".Row" + moves[a].row + " .Col" + moves[a].col;
		$(divstring).css({"border-color":"#ffd11aff"
	});
	}
}

//Brown - #9F6614
// Yellow - #BE9253
// Borders - #997E5A
