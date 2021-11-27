import React, { Component } from "react";
import Node from "./Node/Node";

import "./PathfinderVisual.css";

export default class PathfinderVisual extends Component {
  // Construtor is a method used to initialize an objects state in a class
  //Super is used to call the constrctor of its parent class.
  //Propsis used for passing data from on component to another
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
      //setting nodes equal to an array
      // creating a for loop for rows and cols to create until the iteration has been reached
      //once each of the loops are satisfied then we want to push it to the current row array

    const nodes = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push([]);
      }
      nodes.push(currentRow);
    }
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    console.log(nodes);

    return (
      <div className ="grid">
        {nodes.map((row, rowIdx) => {
          return <div>
            {row.map((node, nodeIdx) => 
              <Node></Node>)}
          </div>;
        })}
      </div>
    );
  }
}
