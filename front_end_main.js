var captured = "#";

$(document).ready(function(){

	create_board(row);
	init_board();

	setupBoard();
	cssSquare();
	refreshSquares(false);
	putPieces(row);

	var selected = {
		symbol : "#",
		row : -1,
		col : -1
	};
	var tempSquares = [];
	
	$(".Square").click(function(){
		temp = highlightcontrol($(this), selected, tempSquares);
		selected = temp[0];
		tempSquares = temp[1];
	});

});

function highlightcontrol(square, selected, tempSquares){
	var Row = square.parent().attr('class');
	var Col = square.attr('class');
	Row = Row.substring(3);
	Col = Col.substring(10);

	var numrow = Number(Row);
	var numcol = Number(Col);

	if(captured != "#"){
		console.log("here");
		newsymb = computeEvolution(captured, row[numrow][numcol].symbol);
		row[numrow][numcol].symbol = newsymb;
		removeCaptured(captured, playermove);
		captured = "#";
		refreshSquares(true);
		putPieces(row);
		refreshCaptured(capturedPieces, row);
		flipplayermove();
		return [selected, []];
	}
	else if(selected.symbol === "#"){
		var symb = row[numrow][numcol].symbol;

		if(row[numrow][numcol].player === playermove){
			selected.symbol = symb;
			selected.row = numrow;
			selected.col = numcol;

			refreshSquares(false);
			tempSquares = computeMoves(symb, numrow, numcol, row);
			highlightpieces(tempSquares);
			return [selected, tempSquares];
		} else return [selected, tempSquares];
	} else {
		if (isValidMove(selected.symbol, selected.row, selected.col, numrow, numcol, row, tempSquares)){
			makeNonCaptureMove (selected.row, selected.col, numrow, numcol, playermove, row);
			selected.symbol = "#";
			selected.row = -1;
			selected.col = -1;

			flipplayermove();

			refreshSquares(true);
			refreshCaptured(capturedPieces, row);
			putPieces(row);
			return [selected, []];
		} else if (row[numrow][numcol].symbol === "#"){
			return [selected, []];
		} else if (row[numrow][numcol].player === playermove){

			selected.symbol = row[numrow][numcol].symbol;
			selected.row = numrow;
			selected.col = numcol;

			refreshSquares(false);
			tempSquares = computeMoves(selected.symbol, selected.row, selected.col, row);
			highlightpieces(tempSquares);
			return [selected, tempSquares];
		} else {
			refreshSquares(false);
			selected.symbol = "#";
			selected.row = -1;
			selected.col = -1;
			return [selected, []];
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
	/*
	$(".Game").css({
		"display": "inline-block",
		"vertical-align": "top",
	});
	*/
	/*
	$(".Captured").css({
		"display" : "inline-block",
		"margin-top": "50px",
		"vertical-align": "top",
		"margin-left": "20px",
	});
	*/
	/*
	$(".White").css({
		"height" : "150px",
		"width" : "250px",
		"background-color" : "#BE9253",
		"border" :  "4px solid #9F6614"
	});
	*/
	/*
	$(".Black").css({
		"height" : "150px",
		"width" : "250px",
		"margin-bottom" : "100px",
		"background-color" : "#BE9253",
		"border" : "4px solid #9F6614"
	});
	*/
	/*
	$(".Board").css({
		"line-height": "0px",
		"background-image": "url(Files/Board_sample.png)",
		"background-repeat": "no-repeat", 
	});
	*/
	/*
	$(".Square").css({
		"border" : "4px solid #997E5A00",
		"height":"48px",
		"width":"48px",
		"display":"inline-block",
		"box-sizing": "border-box"
	});
	*/

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
};

function refreshCaptured(CapturedPieces, someBoard){
	classstr = ".Captured .White"
	$(classstr).empty();
	for (var p1 = 0; p1 < CapturedPieces.player1.length; p1++) {
		posstr = "Pos" + p1;
		$(".White").append("<div class=\"" + posstr + "\"></div>");
		classstr = ".White ." + posstr;
		$(classstr).css({"display":"inline-block",
						"margin-left" : "5px"})
		drawPieces(classstr, CapturedPieces.player1[p1], 1, someBoard);
	}

	$(".Black").empty();
	for (var p2 = 0; p2 < CapturedPieces.player2.length; p2++) {
		posstr = "Pos" + p2;
		$(".Black").append("<div class=\"" + posstr + "\"></div>");
		classstr = ".Black ." + posstr;
		$(classstr).css({"display":"inline-block",
						"margin-left" : "5px"})
		drawPieces(classstr, CapturedPieces.player2[p2], 2, someBoard);
	}

	$(".Captured .Piece").click(function(){
		var temp = $(this).parent().attr('class');
		temp = temp.substring(3);
		temp = Number(temp);

		var clickedplayer = $(this).parent().parent().attr('class');

		if (clickedplayer === "White" && playermove === 1){
			console.log("changing captured1");
			captured = capturedPieces.player1[temp];
		} else if (clickedplayer === "Black" && playermove === 2){
			console.log("changing captured2");
			captured = capturedPieces.player2[temp];
		}	
	});
};


function putPieces(someBoard){
	for(var row = 0 ; row < 12; row++){
		for(var col = 0 ; col < 12; col++){
			var classstr = ".Row" + row + " .Col" + col;
			var symb = someBoard[row][col].symbol;
			var player = someBoard[row][col].player;
			drawPieces(classstr, symb, player, someBoard);
		}
	}

};

function drawPieces(classstr, symb, player, someBoard){

	$(classstr).append("<div class=\"Piece\"></div>");
	$(".Piece").css({
		"height" : "32px",
		"width":"32px", 
	});
	
	$(classstr + " .Piece").addClass("player"+player);
	
	if(symb === "#"){
		$(classstr).empty();
	}

	else if (symb === "K"){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-192px -32px",
		});

	}
	else if (symb.includes("J")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-64px -32px",
		});

	}
	else if (symb === "MI"){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-96px -32px",
		});
	}
	else if (symb.includes("Z")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-32px -32px",
		});
	}
	else if (symb.includes("A")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-128px 0",
		});
	}
	else if (symb === "GR"){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-32px 0",
		});
	}
	else if (symb === "LR"){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "0 0",
		});
	}	
	else if (symb.includes("R")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-160px -32px",
		});
	}
	else if (symb.includes("PP")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-64px 0",
		});
	}
	else if (symb.includes("P")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-96px 0",
		});
	}
	else if (symb.includes("LL")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-192px 0",
		});
	}
	else if (symb.includes("L")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-224px 0",
		});
	}
	else if (symb.includes("SS")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "0 -32px",
		});

	}
	else if (symb.includes("S")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "0 -32px",
		});
	}
	else if (symb.includes("N")){
		if (player === 1){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/White_sprites.png')",
			});
		} else if (player === 2){
			$(classstr + " .Piece").css({
				"background-image" : "url('Files/Black_sprites.png')",
			});
		}
		$(classstr + " .Piece").css({
			"background-position" : "-128px -32px",
		});
	}
}

function highlightpieces(moves){
	for (var a = 0; a < moves.length; a++){
		var divstring = ".Row" + moves[a].row + " .Col" + moves[a].col;
		$(divstring).css({"border-color":"#ffd11aff"
	});
	}
};

// Brown - #9F6614
// Yellow - #BE9253
// Borders - #997E5A
