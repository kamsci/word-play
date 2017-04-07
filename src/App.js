import React, { Component } from 'react';
import './App.css';
import Sentence from './Sentence';
import WordList from './WordList';

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <div>
          <Sentence />
          <WordList />
        </div>
      </div>

    );
  }
}

export default App;
