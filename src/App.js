import React, { Component } from 'react';
import './App.css';
import SentenceReviewCard from './SentenceReviewCard';

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <i className="fa fa-3x fa-circle-thin red"></i>
          <i className="fa fa-3x fa-circle-thin orange"></i>
          <i className="fa fa-3x fa-circle-thin green"></i>
          <i className="fa fa-3x fa-circle-thin blue"></i>
        </div>
        <div>
          <SentenceReviewCard />
        </div>
      </div>

    );
  }
}

export default App;
