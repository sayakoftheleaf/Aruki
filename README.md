# Aruki

Chess Variant

Created for Neural Network and AI research

Copyright - Sayak Chatterjee, 2016

Recent Update - 17th Octobor, 2017 - Still in Development phase


## Pieces and Movements :

Every player begins with 24 pieces:

- 12 Pawns - Can move 1 square in front (Unlike chess can only capture the square in front of it instead of along the diagonals)

- 1 King - Moves 1 square in any direction

- 1 Jester - Can copy the movement of any piece immediately around it (i.e. the 8 squares surrounding it), so it has 8 possible combinations of moves.

- 2 Rooks - Can move anywhere along the row and the column it's at

- 2 Arrows - Can move anywhere along its two diagonals

- 2 Lances - Can move one square along the row or col

- 2 Pikes - Can move one square along the diagonals

- 1 Lesser River - Can move one square in any direction. (Suicidal piece - Can be used once to eliminate all the pieces along the diagonal it's at, for both sides. Therefore, it is illegal to have the King along a diagonal that the opponent's Lesser River is at, no matter at which stage of the game and no matter how many pieces are in between.)

- 1 Greater River - Can move one square in any direction. (Suicidal piece - Can be used once to eliminate all the pieces along the row or column it's at, for both sides. Therefore, it is illegal to have the King along the row or column the opponent's Lesser River is at, no matter at which stage of the game and no matter how many pieces are in between.)

### Evolved Pieces :

Once you capture an opponent's piece, you can use it to evolve one of your own pieces.

- Minister - Can move anywhere along the row and column it's at, and along the two diagonals (Evolves from combining an Arrow and a Rook).

- Greater Pike - Moves one or two squares along the diagonals (Evolves from 2 pikes)

- Greater Lance - Moves one or two squares along the row or column (Evolves from 2 lances)

- Sword - Moves one square in any direction (Evolves from a lance and a pike)

- Long Sword - Moves two squares in any direction (Evolves from 2 Swords or a Greater Lance and a Greater Pike).

- Javelin - Moves one or two squares along the column in any direction (Evolves from 2 pawns)

### Promotions

You can promote pawns (or javelins) to a tier 1, a tier 2 or a tier 3 piece depending on whether they reached the 10th row, 11th row or the 12th row respectively.

- Tier 1 pieces (Can be forged at the 10th row): Lance, Pike, Sword, Javelin

- Tier 2 pieces (Can be forged at the 11th row): Greater Lance, Greater Pike, Long Sword

- Tier 3 pieces (Can be forged at the 12th row): Rook, Arrow, Minister


## Last implemented : 
- Separated the Module that only handled moves from the game engine
- Tested withinBoard, positionOf and copyBoard
- Coded and tested makeNonCaptureMove
- Tested pushSquares - not sure what the flag variable even is. Need to figure that out
- Fixed a massive bug in computePawnMoves
- Coded and fixed computeEvolution


## TODO: 

- Figure out how to differentiate two copies of the same piece

- Write checkforCheck

- Implement the moves for the Greater and Lesser Rivers (Essential for testing the moves module)
- Create a document with the actual rules of the game for ease
- Implement User interactivity

## Update Fixes:

## Known Issues:

