$(document).ready(function(){
	setupBoard();
	cssSquare();
	create_board(row);
	init_board();
	print_board(row);
	putPieces(row);
});

function setupBoard(){
	for(var a = 0; a < 12; a++){
		var classa = "Row" + a;
		var divstring = "<div class=\"" + classa + "\"></div>"
		$(".Board").append(divstring);
		$("." + classa).css({"display":"block",
			"margin" : "6px",
		});
		for (var b = 0; b < 12; b++){
			var strcol = "Col" + b;
			$("." + classa).append("<div class=\"Square " + strcol + "\"></div>");
		}
	}
};

function cssSquare(){
	$(".Board").css({"line-height": "0px",
					 //"display":"grid",
					 //"grid-template-columns":"repeat(12, 48px)",
					 //"grid-template-rows":"repeat(12, 48px)"
					});

	$(".Square").css({
		"outline" : "solid",
		"outline-width" : "3px",
		"border" : "1px solid #997E5A",
		"height":"48px",
		"width":"48px",
		"display":"inline-block",
		"margin-right" : "3px",
		"margin-left" : "3px",
	});

	var rowflag = false;
	for(var a = 0; a < 12; a++){
		
		if (rowflag)
			color = true;
		else 
			color = false;

		var classa = "Row" + a;

		for (var b = 0; b < 12; b++){

			var divstring = "." + classa + " .Col" + b;
			if (color)
				$(divstring).css({"background-color": "#9F6614",
					"outline-color":"#9F6614"
				});
			else 
				$(divstring).css({"background-color":"#BE9253",
					"outline-color":"#BE9253" 
				});

			color = !color
		}

		rowflag = !rowflag;
	}

};

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

			if (symb === "K"){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -192px -32px",
				});
			}
			else if (symb.includes("J")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -64px -32px"
				});
			}
			else if (symb === "MI"){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -96px -32px"
				});
			}
			else if (symb.includes("R")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -160px -32px"
				});
			}
			else if (symb.includes("Z")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -32px -32px"
				});
			}
			else if (symb.includes("A")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -128px 0"
				});
			}
			else if (symb.includes("GR")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -32px 0"
				});

			}
			else if (symb.includes("LR")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') 0 0"
				});
			}	
			else if (symb.includes("L")){
				console.log("here");
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -64px 0"
				});
			}
			else if (symb.includes("P")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -224px 0"
				});
			}
			else if (symb.includes("PP")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -64px 0"
				});
			}
			else if (symb.includes("LL")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -192px 0"
				});
			}
			else if (symb.includes("S")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -160px 0"
				});
			}
			else if (symb.includes("SS")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') 0 -32px"
				});
			}
			else if (symb.includes("N")){
				$(classstr + " .Piece").css({
					"background" : "url('Files/Borderless_sprites.png') -128px -32px"
				});
			}
		}
	}
};



//Brown - #9F6614
// Yellow - #BE9253
// Borders - #997E5A
