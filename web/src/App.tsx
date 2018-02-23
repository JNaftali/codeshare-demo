import * as React from 'react';
import test2, { test1 } from './shared/jstest';
import tstest2, { test1 as tstest1 } from './shared/tstest';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{test1}</p>
        <p className="App-intro">{test2}</p>
        <p className="App-intro">{tstest1}</p>
        <p className="App-intro">{tstest2}</p>
      </div>
    );
  }
}

export default App;
