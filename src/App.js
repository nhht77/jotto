import React, { Component } from 'react';
import logo from './logo.svg';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Congrats success={this.state.success} />
          <GuessedWords guessedWords={this.state.guessedWords} />
          <button className="App-link">Learn React</button>
        </header>
      </div>
    );
  }
}

export default App;
