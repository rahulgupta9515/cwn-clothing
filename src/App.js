import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Page/Homepage/Homepage.component'


const HatsPage = () => (
  <div>
      <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact = {true}  path = '/' component = {HomePage}/>
        <Route  path = '/' component = {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
