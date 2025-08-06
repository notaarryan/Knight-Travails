const valid = [
  [1, 2],
  [2, 1],
  [-1, -2],
  [-2, -1],
  [-1, 2],
  [2, -1],
  [-2, 1],
  [1, -2],
];

const knightsTravails = (start, end) => {
  let queue = [{ position: start, path: [start] }];
  let visited = [];

  while (queue.length > 0) {
    const { position, path } = queue.shift();
    const current = position;

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    for (let i = 0; i < valid.length; i++) {
      const x = valid[i][0];
      const y = valid[i][1];
      const newX = current[0] + x;
      const newY = current[1] + y;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX <= 7 &&
        newY <= 7 &&
        !visited.some((val) => val[0] === newX && val[1] === newY)
      ) {
        queue.push({ position: [newX, newY], path: [...path, [newX, newY]] });
      }
    }
  }
};
