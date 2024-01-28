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
function knightPossibleMoves(x, y) {
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

// TODO: Write a func that checks if the array contains the target field
// if yes, print result
// if no, repeat knightPossiblemoves with all other fields from the array
// link the moves via tree with up to 8 childs
// TODO: Think about the data structure and search algorythm before going further

function knightMoves(knightPosition, knightTarget) {
  const possibleMoves = knightPossibleMoves(
    knightPosition[0],
    knightPosition[1]
  );
  for (field of possibleMoves) {
    if (field[0] == knightTarget[0] && field[1] == knightTarget[1]) {
      console.log("Target reached in one turn!");
      console.log(knightPosition, knightTarget);
      return;
    }
  }
  console.log("1 turn was not enough, calculating next turn...");
}

knightMoves([3, 3], [5, 4]);

// TESTING

// function setKnightPosition(x, y) {
//   knightPosition.x = x;
//   knightPosition.y = y;
// }

// console.log("Testing moves for position 3-3");
// console.log(knightPossibleMoves(knightPosition.x, knightPosition.y));

// setKnightPosition(3, 1);
// console.log("Testing moves for position 3-1");
// console.log(knightPossibleMoves(knightPosition.x, knightPosition.y));

// setKnightPosition(0, 0);
// console.log("Testing moves for position 0-0");
// console.log(knightPossibleMoves(knightPosition.x, knightPosition.y));
