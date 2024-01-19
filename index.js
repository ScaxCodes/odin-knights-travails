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

console.log(`Knights position: ${knightPosition.x}, ${knightPosition.y}`);

// Write a function that returns an array with all the possible moves from the knights current position
function knightMoves(x, y) {
  const moves = [];
  moves.push([x + 2, y + 1]);
  moves.push([x + 2, y - 1]);
  moves.push([x - 2, y + 1]);
  moves.push([x - 2, y - 1]);
  moves.push([x + 1, y + 2]);
  moves.push([x + 1, y - 2]);
  moves.push([x - 1, y + 2]);
  moves.push([x - 1, y - 2]);

  // Remove moves against the rules
  moves.forEach((move, index) => {
    move.forEach((num) => {
      if (num < 0 || num > 7) {
        console.log(`Move ${index + 1} is invalid!`);
        moves.splice(index, 1);
      }
    });
  });

  return moves;
}

console.log(knightMoves(knightPosition.x, knightPosition.y));

// Write a function to change position, test other cases during same run

// TODO:
// Works with 3,3 and 3,1, but not with 0,0... why?
