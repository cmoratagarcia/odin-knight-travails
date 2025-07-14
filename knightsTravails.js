function knightMoves(start, end) {
  const boardSize = 8;

  // All 8 possible moves
  const knightMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  // Make sure the move doesn't go off the board
  function isInsideBoard([x, y]) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }

  //Use a queue to keep track (current, path so far)
  const queue = [[start, [start]]];

  const visited = new Set(); //Remember squares already visited
  visited.add(start.toString()); //Convert to string so the values can be compared
}
