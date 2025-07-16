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

  while (queue.length > 0) {
    const [current, path] = queue.shift();
  }

  const visited = new Set(); //Remember squares already visited
  visited.add(start.toString()); //Convert to string so the values can be compared

  // When end is found
  if (current[0] === end[0] && current[1] === end[1]) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((square) => console.log(`[${square[0]},${square[1]}]`));
  }

  // Check all possible moves
  for (let [dx, dy] of knightMoves) {
    const next = [current[0] + dx, current[1] + dy];
    const key = next.toString();

    if (isInsideBoard(next) && !visited[key]) {
      visited.add(key);
      queue.push([next, [...path, next]]);
    }
  }
}
