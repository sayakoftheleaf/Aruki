function overrideBoard(someBoard, piecePositions){
    for (var a = 0; a < 12; a++){
        for (var b = 0; b < 12; b++){
          someBoard[a][b].symbol = "#";
          someBoard[a][b].player = 0;  
        } 
    }

    for (var a = 0; a < piecePositions.length; a++){
        someBoard[piecePositions[a].row][piecePositions[a].col].symbol = piecePositions[a].symbol;
        someBoard[piecePositions[a].row][piecePositions[a].col].player = piecePositions[a].player;
    }
}

function checkCheck(someBoard){
    var positions = [];

    //positions.push({row : 0, col : 0, symbol : "MI", player : 2});
    positions.push({row : 0, col : 9, symbol: "K", player : 1});
    positions.push({row : 2, col : 7, symbol: "SS", player : 2});
    overrideBoard(someBoard, positions);
    print_board(someBoard);

    console.log(checkForCheck(someBoard, 1));

}