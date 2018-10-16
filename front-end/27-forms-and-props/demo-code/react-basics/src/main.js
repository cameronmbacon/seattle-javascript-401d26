import React from 'react'; // ES6
import ReactDom from 'react-dom';
import App from './components/app/app';
import '../style/main.scss';
//------------------------------------------------------------

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
//! Vinicio - this will be what starts the entire application
ReactDom.render(<App />, rootNode);
