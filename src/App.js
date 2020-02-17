import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css';
import CakeContainer from './component/CakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import HooksCakeContainer from './component/HooksCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <hr />
        <u><h1>Cake Counters</h1></u>
        <hr />
        <h2>Hook's COunter</h2>
        <HooksCakeContainer /><br />
        <h2>2nd COunter</h2>
        <CakeContainer /><br />
        <hr />
        <u><h1>Ice-Cream Counters</h1></u>
        <hr />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
