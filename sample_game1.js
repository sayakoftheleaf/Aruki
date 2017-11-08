    function samplegame1(newboard){

    // white move 1
    var firstpawn = positionOf("Z5", newboard, 1);
    var somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
    

    print_board(newboard);

    // black move 1
    firstpawn = positionOf("Z2", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
    

    print_board(newboard);

    // white move 2
    firstpawn = positionOf("Z5", newboard, 1);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
    
    
    print_board(newboard);

    // black move 2
    firstpawn = positionOf("L1", newboard, 2);
    somemove = computeLanceMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    
    print_board(newboard);

    // white move 3
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // black move 3
    firstpawn = positionOf("Z4", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // white move 4
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[2].row, somemove[2].col, newboard);

    print_board(newboard);

    // black move 4
    firstpawn = positionOf("Z0", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    // white move 5
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // black move 5
    firstpawn = positionOf("R1", newboard, 2);
    //console.log(firstpawn);
    somemove = computeRookMoves(firstpawn.row, firstpawn.col, false, 2, newboard);
    //console.log(somemove);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    //white move 6
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    //console.log(somemove);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

     // black move 6
    firstpawn = positionOf("Z1", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // white move 7
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    //console.log(somemove);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // black move 7
    firstpawn = positionOf("R1", newboard, 2);
    somemove = computeRookMoves(firstpawn.row, firstpawn.col, false, 2, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // white move 8
    firstpawn = positionOf("Z2", newboard, 1);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // black move 8
    firstpawn = positionOf("A1", newboard, 2);
    somemove = computeArrowMoves(firstpawn.row, firstpawn.col, false, 2, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    // white move 9
    firstpawn = positionOf("A1", newboard, 1);
    somemove = computeArrowMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[3].row, somemove[3].col, newboard);

    print_board(newboard);

    // white move 10
    // Testing Jester with Arrow
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[8].row, somemove[8].col, newboard);

    print_board(newboard);
    printPlayerConfig(newboard);

}

