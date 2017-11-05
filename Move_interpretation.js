
function interpretString(str)
{
	if (!(str.search("Z") === -1)) {

	} else if (!(str.search("L") === -1)) {
		
	} 
}

function interpretRow(char){
	if (char === "a")
		return 0;
	else if (char === "b")
		return 1;
	else if (char === "c")
		return 2;
	else if (char === "d")
		return 3;
	else if (char === "e")
		return 4;
	else if (char === "f")
		return 5;
	else if (char === "g")
		return 6;
	else if (char === "h")
		return 7;
	else if (char === "i")
		return 8;
	else if (char === "j")
		return 9;
	else if (char === "k")
		return 10;
	else if (char === "l")
		return 11;
}

function interpretCol(number){
	if (number === 0)
		return 11;
	else if (number === 1)
		return 10;
	else if (number === 2)
		return 9;
	else if (number === 3)
		return 8;
	else if (number === 4)
		return 7;
	else if (number === 5)
		return 6;
	else if (number === 6)
		return 5;
	else if (number === 7)
		return 4;
	else if (number === 8)
		return 3;
	else if (number === 9)
		return 2;
	else if (number === 10)
		return 1;
	else if (number === 11)
		return 0;	
}