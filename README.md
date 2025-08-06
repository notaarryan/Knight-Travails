# Knight's Travails 🐴

This project implements a solution to the classic **Knight's Travails** problem using **Breadth-First Search (BFS)** in JavaScript.

Given a starting and ending position on a standard 8x8 chessboard, the program finds the **shortest path** a knight can take to reach the destination.

---

## 📦 Features

- Uses BFS to ensure the shortest path is always found
- Represents knight moves using valid coordinate shifts
- Tracks the path taken from start to end
- Operates on any valid coordinates from `[0, 0]` to `[7, 7]`

---

## ▶️ How to Use

You can run this function directly in your browser's **Developer Console** (e.g., Chrome, Firefox, Edge).

To open the console:
- Right-click anywhere on the page and choose **Inspect**
- Go to the **Console** tab

Then paste in the code and call the function like this:

```js
knightsTravails(start, end);
```

- `start` and `end` are arrays representing coordinates on the board, e.g., `[0, 0]` and `[7, 7]`.

It returns an array of positions representing the shortest path taken by the knight.

---

## 🧪 Example

```js
console.log(knightsTravails([0, 0], [3, 3]));
// Output: [ [0, 0], [1, 2], [2, 4], [3, 3] ]
```

---

## 📁 File Structure

- `index.html` – HTML file used to run and test the knight pathfinding function in the browser
- `KnightsTravails.js` — contains the BFS logic and pathfinding function
- `README.md` — project documentation

---

## 📌 Notes

- Coordinates are zero-indexed: `[0, 0]` is the bottom-left of the board
- Valid moves are calculated using 8 possible knight directions
- The board is bounded from `0` to `7` in both axes

---

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.
