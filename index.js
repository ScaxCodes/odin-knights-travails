class Move {
  constructor(x, y, prev = null) {
    this.x = x; // x-coordinate of the field
    this.y = y; // y-coordinate of the field
    this.prev = prev; // Reference to the previous Move object
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Error - queue is empty!";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function shortestPath(start, target) {
  const queue = new Queue();
  const visited = new Set();

  // Add start field to the queue
  queue.push(start);
  visited.add(`${start.x},${start.y}`);

  while (!queue.isEmpty()) {
    const currentMove = queue.pop();

    // Check if the current field is the target field
    if (currentMove.x === target.x && currentMove.y === target.y) {
      // We have found the shortest path, so we backtrack to create the path
      return getPath(currentMove);
    }

    // Add all possible next moves that the knight can make
    const possibleMoves = knightPossibleMoves(currentMove.x, currentMove.y);
    possibleMoves.forEach((move) => {
      const [nextX, nextY] = move;
      // Check if the field is within the chessboard and if it has not been visited already
      if (
        nextX >= 0 &&
        nextX < 8 &&
        nextY >= 0 &&
        nextY < 8 &&
        !visited.has(`${nextX},${nextY}`)
      ) {
        const nextMove = new Move(nextX, nextY, currentMove);
        queue.push(nextMove);
        visited.add(`${nextX},${nextY}`);
      }
    });
  }

  // If no path is found, return null
  return null;
}

function getPath(move) {
  const path = [];
  let currentMove = move;
  while (currentMove !== null) {
    path.unshift([currentMove.x, currentMove.y]);
    currentMove = currentMove.prev;
  }
  return path;
}

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
    } else {
      validMoves.push(move);
    }
  });
  return validMoves;
}

// TESTING
console.log("Testing knightPossibleMoves:");
console.log(knightPossibleMoves(3, 3)); // Expected: [[5, 4], [5, 2], [1, 4], [1, 2], [4, 5], [4, 1], [2, 5], [2, 1]]

const start = new Move(3, 3);
const target = { x: 7, y: 3 };

// console.log("Testing shortestPath:");
// console.log("Start field:", start);
// console.log("Target field:", target);
// console.log("Shortest path:", shortestPath(start, target)); // Expected: Shortest path as an array of field coordinates

// start.x = 0;
// start.y = 0;
// target.x = 7;
// target.y = 7;

console.log("Testing shortestPath:");
console.log("Start field:", start);
console.log("Target field:", target);
const path = shortestPath(start, target);

if (path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((coords) => {
    console.log(`[${coords}]`);
  });
} else {
  console.log("No path found!");
}
