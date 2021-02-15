import React from 'react';
import ReactDOM from 'react-dom';
import state from './components/state/state';
import {options, titles, texts} from './components/state/state';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} 
         options={options}
         titles={titles}
         texts={texts}/>
  </React.StrictMode>,
  document.getElementById('root')
);



