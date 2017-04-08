import React, { Component } from 'react';
import './App.css';
import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewCard from './DescriptionReviewCard';

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
          <p className="intro">Click on one of the alternative words to view the sentence with different word options:</p>
          <SentenceReviewCard />
          <DescriptionReviewCard />
        </div>
      </div>

    );
  }
}

export default App;
