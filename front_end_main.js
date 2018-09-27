// This variable keeps track of whether the opponent had previously clicked on
// a piece from the captured pieces tray

var captured = "#";

// The variable that handles whose turn it is is declared in the game_engine
// module, but can be used in this module. It's 'playermove'

$(document).ready(function(){

	create_board(row);
	init_board();

	setupBoard();
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

	// Extracting the Row and the Column number from the div classes of the
	// clicked squares

	var Row = square.parent().attr('class');
	var Col = square.attr('class');
	Row = Row.substring(3);
	Col = Col.substring(10);

	// Converting the extracted strings to actual numbers
	var numrow = Number(Row);
	var numcol = Number(Col);

	if(captured != "#"){


		newsymb = computeEvolution(captured, row[numrow][numcol].symbol);

		// If the evolution is actually valid
		if (newsymb != row[numrow][numcol].symbol){
			// This prevents the player from evolving the opponent's pieces
			if (row[numrow][numcol].player === playermove){
				row[numrow][numcol].symbol = newsymb;

				// This function is in game_engine
				// removes the captured piece that is being used from the captured stack
				removeCaptured(captured, playermove);
				captured = "#";
				flipplayermove();

				// refreshing the UI
				refreshSquares(true);
				putPieces(row);
				refreshCaptured(capturedPieces, row);
				return [selected, []];
			}
				// This handles the cases when the player clicks on a captured piece
				// and then clicks on the opponent's piece
				else {
					captured = "#";
					selected.symbol = "#";
					selected.row = -1;
					selected.col = -1
					return [selected, []];
			}
		}
			// This handles cases when the player clicks on a piece in the captured
			// pieces stack, but then does not click on a square with a piece.
			// Here, if the square clicked was a move for the original piece, the
			// game assumes that clicking on the captured piece was a misclick and
			// moves the previous piece to the square.

			else if (newsymb === "#"){
				captured = "#";
				highlightcontrol(square, selected, tempSquares);
			}

			// This handles cases when the evolution wasn't valid
			// and therefore just ignores the captured piece selection
			// and just considers the piece selected second for movement
			else {
				captured = "#";
				console.log ("here bunny bunny");
				selected.symbol = row[numrow][numcol].symbol;
				selected.row = numrow;
				selected.col = numcol;

				refreshSquares(false);
				tempSquares = computeMoves(selected.symbol, selected.row, selected.col, row);
				highlightpieces(tempSquares);
				return [selected, tempSquares];
			}
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

/* FUNCTION PURPOSE : refreshes the borders of each individual square after
	every time mouse event.

	LOGIC : When a mouse click occurs, the background color of the squares the piece
	can move to changes.
	When another mouse event occurs, the background color of the previously colored
	square reverts and if the player clicked on another piece then the same process
	occurs again. If the player moved the previous pieces, then nothing more
	happens after the revert.

	FUNCTION STATUS : Working as intended
*/

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
			}
			else {
				$(divstring).css({"background-color":"#BE925300",
					"border-color":"#BE925300"
				});
			}
			if (deletenodes)
				$(divstring).empty();
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

/*
		FUNCTION PURPOSE : draws each individual piece that is there during any state
		of the board
*/

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
