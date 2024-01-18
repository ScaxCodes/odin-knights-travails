let visitedChessFields = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const knightPosition = { x: 3, y: 3 };

console.log(knightPosition.x);

// Write a function that returns an array with all the possible moves from the knights current position
function knightMoves(x, y) {
  const array = [];
  array.push([x + 2, y + 1]);
  array.push([x + 2, y - 1]);
  array.push([x - 2, y + 1]);
  array.push([x - 2, y - 1]);
  array.push([x + 1, y + 2]);
  array.push([x + 1, y - 2]);
  array.push([x - 1, y + 2]);
  array.push([x - 1, y - 2]);
  return array;
}

console.log(knightMoves(3, 3));
