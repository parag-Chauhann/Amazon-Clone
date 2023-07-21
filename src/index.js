import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Components/ContextAPI/StateProvidert';
import reducer, { initialState } from './Components/ContextAPI/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />

    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
