import "@babel/polyfill";
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import Home from '../home/home';

//! Vinicio - in code, components are classes that extend from React.Component
class App extends React.Component {
  //! Vinicio - props are the main way of communication in REACT
  constructor(props) {
    super(props); // Initialize everything on React's side of the component
  }

  //! React components NEED to have one render function in every compontent
  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Header/>
            <nav>
              <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/dashboard"> Dasboard </Link></li>
              </ul>
            </nav>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

//! Vinicio - export default, means I'm only exporting ONE entity
export default App;
