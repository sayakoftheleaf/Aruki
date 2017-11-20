$(document).ready(function(){
	setupBoard();
	cssSquare();
});

function setupBoard(){
	for(var a = 0; a < 12; a++){
		var classa = "Row" + a;
		var divstring = "<div class=\"" + classa + "\"></div>"
		$(".Board").append(divstring);
		$("." + classa).css({"display":"block",
							 "margin" : "4px",
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
					   "outline-width" : "2px",
					   "border" : "1px solid #997E5A",
					   "height":"52px",
					   "width":"52px",
					   "display":"inline-block",
					   "margin-right" : "2px",
					   "margin-left" : "2px",
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
			console.log(divstring)
		}

		rowflag = !rowflag;
	}

};

function putPieces(someBoard){
	for(var row = 0 ; row < 12; row++){
		for(var col = 0 ; col < 12; col++){
			var classrow = "Row" + row;
			var classcol = "Col" + col;
			someBoard[row][col]
		}
	}
}



//Brown - #9F6614
// Yellow - #BE9253
// Borders - #997E5A
