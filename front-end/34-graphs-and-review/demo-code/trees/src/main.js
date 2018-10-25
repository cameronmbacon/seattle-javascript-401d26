'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    //! Vinicio - this variable keeps track of Edges (neighbors)
    this._adjacencyList = new Map();
  }

  addNode(node) {
    this._adjacencyList.set(node, []);
  }

  addDirectedEdge(startNode, endNode, weight = 0) {
    if (!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    const adjacencies = this._adjacencyList.get(startNode);
    adjacencies.push(new Edge(endNode, weight));
  }

  getNeighbors(node) {
    if (!this._adjacencyList.has(node)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    return [...this._adjacencyList.get(node)];
  }
}
