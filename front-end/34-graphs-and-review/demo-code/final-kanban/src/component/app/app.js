import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import './_app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='ui'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
