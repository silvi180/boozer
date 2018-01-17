import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './CocktailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cocktails</h1>
        </header>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
