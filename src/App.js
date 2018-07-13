import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from './components/WorldMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Data visualisation</h1>
        </header>
        <WorldMap/>
      </div>
    );
  }
}

export default App;
