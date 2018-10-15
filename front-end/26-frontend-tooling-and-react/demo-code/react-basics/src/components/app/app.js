import React from 'react';
import Header from '../header/header'

//! Vinicio - in code, components are classes that extend from React.Component

class App extends React.Component {
  //! Vinicio - props are the main way of communication in REACT
  constructor(props) {
    super(props); // Initialize everything on React's side of the component

    this.state = {};
    this.state.counter = 0;
    this.state.message = 'Gregor is super COOL';
    this.state.secretState = 'Gregor is a coward, but I love him';
  }

  //! Vinicio -arrow functions are going te be pre-bound to the class itself
  handleCounterIncrement = () => {
    //! Vinicio - setState is an ASYNC function
    this.setState((previousState) => {
      // Here. I'm going to return the state of the application
      return {
        counter: previousState.counter +1,
      };
    });
    //! Vinicio code here will run immediately
  };

  //! Vinicio -arrow functions are going te be pre-bound to the class itself
  handleCounterDecrement = () => {
    //! Vinicio - setState is an ASYNC function
    this.setState((previousState) => {
      // Here. I'm going to return the state of the application
      return {
        counter: previousState.counter -1,
      };
    });
    //! Vinicio code here will run immediately
  };

  //! React components NEED to have one render function in every compontent
  render() {
    return (
      <div className='normal-class'>
        <Header/> {/* new Header().render();*/}
        <h2> Hello I am a regular H2</h2>
        <p> Hey. I am about to show you a random number { Math.random() }</p>
        <p> Hey. This is a message from the developer (Vinicio) : { this.state.message }</p>
        <p>The cutest cats are:</p>
        <ul>
          {
            ['Gregor', 'The Hound', 'Gregor and The Hound'].map(item => <li key={ item }> { item } </li>)
          }
        </ul>
        <p> The value of the counter is: { this.state.counter }</p>
        <button onClick={this.handleCounterIncrement}> Increment Counter </button>
        <button onClick={this.handleCounterDecrement}> Decrement Counter </button>
      </div>
    ); //! Vinicio - every return function will return JSX
  }
}

//! Vinicio - export default, means I'm only exporting ONE entity
export default App;
