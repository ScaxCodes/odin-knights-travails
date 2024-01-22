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

  const validMoves = [];
  moves.forEach((move, index) => {
    if (move[0] < 0 || move[1] < 0 || move[0] > 7 || move[0] > 7) {
      console.log(`Move ${index + 1} is invalid!`);
      } else {
      validMoves.push(move);
      console.log(`Move ${index + 1} is valid!`);
    }
  });

  return validMoves;

  // Why is this not working? Strange forEach behaviour with splice method?

  // moves.forEach((move, index) => {
  //   if (move[0] < 0 || move[1] < 0 || move[0] > 7 || move[0] > 7) {
  //     console.log(`Move ${index + 1} is invalid!`);
  //     moves.splice(index, 1);
  //     } else {
  //     console.log(`Move ${index + 1} is valid!`);
  //   }
  // });

  // return moves;
}

function setKnightPosition(x, y) {
  knightPosition.x = x;
  knightPosition.y = y;
}

console.log("Testing moves for position 3-3")
console.log(knightMoves(knightPosition.x, knightPosition.y));

setKnightPosition(3, 1);
console.log("Testing moves for position 3-1")
console.log(knightMoves(knightPosition.x, knightPosition.y));

setKnightPosition(0, 0);
console.log("Testing moves for position 0-0")
console.log(knightMoves(knightPosition.x, knightPosition.y));