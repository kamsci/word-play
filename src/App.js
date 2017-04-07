import React, { Component } from 'react';
import './App.css';
import SentenceReviewCard from './SentenceReviewCard';

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <div>
          <SentenceReviewCard />
        </div>
      </div>

    );
  }
}

export default App;
