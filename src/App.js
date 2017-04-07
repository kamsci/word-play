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
          <p className="intro">Click on one of the alternative words to view the sentence with different word options:</p>
          <SentenceReviewCard />
        </div>
        <div className="footer">
            <p className="name">powered by KristaCalderon</p>
            <p className="github">sourceCode:
              <a href="https://github.com/kamsci/word-play"><i className="fa fa-2x fa-github"></i></a>
            </p>
        </div>
      </div>

    );
  }
}

export default App;
