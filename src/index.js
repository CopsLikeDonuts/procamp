import React from 'react';
import ReactDOM from 'react-dom';
import state from './components/state/state';
import {options} from './components/state/state';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} 
         options={options}/>
  </React.StrictMode>,
  document.getElementById('root')
);



