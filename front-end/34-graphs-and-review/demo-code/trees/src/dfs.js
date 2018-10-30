'use strict';

const Stack = require('stack-lifo');

module.exports = (graph, startNode, goalNode) => {
  //-----------------------------------------------
  const stack = new Stack(); //! Vinicio - change this for a QUEUE for next week's challenge
  const visitedNodes = new Set();
  const parentPath = new Map(); //! Vinicio - this holds the final path at the end
  //-----------------------------------------------
  stack.push(startNode);
  visitedNodes.add(startNode);
  //-----------------------------------------------
  // MAIN LOOP
  //-----------------------------------------------
  while (stack.size() > 0) {
    const currentNode = stack.pop();

    if (currentNode === goalNode) {
      return parentPath; //! Vinicio - this returns the path from start to goal
    }

    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors) { // eslint-disable-line
      const neighborNode = neighbor.node;

      if (visitedNodes.has(neighborNode)) {
        //! Vinicio - stop, go to the next neighbor
        //! Vinicio - this line is avoiding loops
        continue; // eslint-disable-line
      } else {
        visitedNodes.add(neighborNode);
      }
      parentPath.set(neighborNode, currentNode);

      stack.push(neighborNode); // O(1)
    }
  }
  //! Vinicio - if I get to this line...I didn't find a path
  return null;
};
