    function samplegame1(newboard){

    // white move 1
    var firstpawn = positionOf("Z5", newboard, 1);
    var somemove = computePawnMoves(firstpawn.row, firstpawn.col, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);
    
    print_board(newboard);
    //console.log(capturedPieces);

    // black move 1
    firstpawn = positionOf("Z2", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, 2, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);    

    print_board(newboard);
    //console.log(capturedPieces);

    // white move 2
    firstpawn = positionOf("Z5", newboard, 1);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, 1, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);
        
    print_board(newboard);
    //console.log(capturedPieces);

    // black move 2
    firstpawn = positionOf("L1", newboard, 2);
    somemove = computeLanceMoves(firstpawn.row, firstpawn.col, 2, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);
  
    print_board(newboard);
    //console.log(capturedPieces);

    // white move 3
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, 1, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // black move 3
    firstpawn = positionOf("Z4", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, 2, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // white move 4
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[2].row, somemove[2].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // black move 4
    firstpawn = positionOf("Z0", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, 2, newboard);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    // white move 5
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, 1, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // black move 5
    firstpawn = positionOf("R1", newboard, 2);
    ////console.log(firstpawn);
    somemove = computeRookMoves(firstpawn.row, firstpawn.col, 2, newboard);
    ////console.log(somemove);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    //white move 6
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, 1, newboard);
    ////console.log(somemove);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

     // black move 6
    firstpawn = positionOf("Z1", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, 2, newboard);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // white move 7
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, 1, newboard);
    ////console.log(somemove);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // black move 7
    firstpawn = positionOf("R1", newboard, 2);
    somemove = computeRookMoves(firstpawn.row, firstpawn.col, 2, newboard);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // white move 8
    // checking Pawn movement
    firstpawn = positionOf("Z2", newboard, 1);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, 1, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // black move 8
    // checking Arrow movement
    firstpawn = positionOf("A1", newboard, 2);
    somemove = computeArrowMoves(firstpawn.row, firstpawn.col, 2, newboard);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard)
    //console.log(capturedPieces);

    // white move 9
    // checking Arrow movement
    firstpawn = positionOf("A1", newboard, 1);
    somemove = computeArrowMoves(firstpawn.row, firstpawn.col, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[3].row, somemove[3].col, 1, newboard);

    print_board(newboard)
    //console.log(capturedPieces);

    //black move 9
    // checking Pike movement
    firstpawn = positionOf("P1", newboard, 2);
    somemove = computePikeMoves(firstpawn.row, firstpawn.col, 2, newboard);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard)
    //console.log(capturedPieces);

    // white move 10
    // Testing Jester with Arrow
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[6].row, somemove[6].col, 1, newboard);

    print_board(newboard); (newboard);

    // black move 10
    // checking evolution

    capturedPieces.player2 = capturedPieces.player2.concat("P");

    firstpawn = positionOf("P1", newboard, 2);
    evolvePiece(firstpawn.row, firstpawn.col, "P", "P", newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // white move 11
    // testing Greater river movement 
    firstpawn = positionOf("GR", newboard, 1);
    somemove = computeGreaterRiverMoves(firstpawn.row, firstpawn.col, 1, newboard);
     makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard); 
      //console.log(capturedPieces);

    // black move 11
    // Testing Double Pike movement
    firstpawn = positionOf("PP", newboard, 2);
    somemove = computeGreaterPikeMoves(firstpawn.row, firstpawn.col, 2, newboard);
      makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 2, newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    // white move 12

    capturedPieces.player1 = capturedPieces.player1.concat("L");

    firstpawn = positionOf("P1", newboard, 1);
    evolvePiece(firstpawn.row, firstpawn.col, "P", "L", newboard);

    print_board(newboard);
    //console.log(capturedPieces);

    firstpawn = positionOf("S", newboard, 1);
    somemove = computeSwordMoves(firstpawn.row, firstpawn.col, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, 1, newboard);

    print_board(newboard);
    //console.log(capturedPieces);
    // black move 12

    // white move 13
    firstpawn = positionOf("A1", newboard, 1);
    somemove = computeArrowMoves(firstpawn.row, firstpawn.col, 1, newboard);
    //console.log(somemove);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[13].row, somemove[13].col, 1, newboard);

    print_board(newboard);
    console.log(capturedPieces);
}

