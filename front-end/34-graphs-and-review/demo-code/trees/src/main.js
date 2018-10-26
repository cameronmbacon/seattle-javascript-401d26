'use strict';

const dfs = require('./dfs');

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


const graph = new Graph();

const ten = new Node(10);
const two = new Node(2);
const six = new Node(6);
const seven = new Node(7);
const three = new Node(3);
const eight = new Node(8);

graph.addNode(ten);
graph.addNode(two);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(three)
graph.addNode(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);


const path = dfs(graph, ten, seven);

console.log(path);
