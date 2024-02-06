// TODO: Nochmal neu konzeptionieren von vorne mit Pseudecode und data structures
// dann Lösung anschauen, dann nochmal nachbauen, alternativ chatgpt fragen a la CC

// Not needed for the current solution
// let visitedChessFields = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

class Move {
  constructor(x, y, prev = null) {
    this.position = { x, y };
    this.prev = prev;
    // .next could be an object with 8 positions and the bool prop validMove
    this.next = [];
  }
}

const tree = { 1: [] };

// const test = new Move();
// const test2 = new Move(2, 3);
// const test3 = new Move(5, 5, test2);

// console.log(test, test2, test3);
// console.log(test3.prev.position.x);

const knightPosition = { x: 3, y: 3 };
const knightTarget = { x: 7, y: 3 };

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
      // console.log(`Move ${index + 1} is invalid!`);
    } else {
      validMoves.push(move);
      // console.log(`Move ${index + 1} is valid!`);
    }
  });
  // console.log("Valid moves are:");
  // console.log(validMoves);
  return validMoves;
}

function calcLevel(x, y) {
  const currentLevel = Object.entries(tree).length;
  console.log(currentLevel);
  if (currentLevel == 1) {
    const possibleMoves = knightPossibleMoves(x, y);
    console.log(possibleMoves);
    const root = new Move(x, y);
    possibleMoves.forEach((move) => {
      root.next.push(move);
    });
    console.log(root);
    tree[1].push(root);
  } else {
  }
}

calcLevel(3, 3);
searchTarget();

function searchTarget() {
  const currentLevel = parseInt(Object.entries(tree).length);
  for (field of tree[currentLevel][0].next) {
    if (field[0] == knightTarget.x && field[1] == knightTarget.y) {
      console.log(`Target reached in ${currentLevel} turn!`);
      return;
    }
  }
  console.log(`${currentLevel} turn was not enough, calculating next turn...`);
  tree[currentLevel + 1] = [];
}

// TODO: Write a func that checks if the array contains the target field
// if yes, print result
// if no, repeat knightPossiblemoves with all other fields from the array
// link the moves via tree with up to 8 childs
// remember to do many little functions instead of one big (single responsibility principle)
// TODO: Think about the data structure and search algorythm before going further

// function knightMoves(knightPosition, knightTarget) {
//   const possibleMoves = knightPossibleMoves(
//     knightPosition[0],
//     knightPosition[1]
//   );
//   for (field of possibleMoves) {
//     if (field[0] == knightTarget[0] && field[1] == knightTarget[1]) {
//       console.log("Target reached in one turn!");
//       console.log(knightPosition, knightTarget);
//       return;
//     }
//   }
//   console.log("1 turn was not enough, calculating next turn...");
// }

// TESTING
// knightMoves([3, 3], [5, 4]);

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
