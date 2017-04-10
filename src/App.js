import React, { Component } from 'react';
import './App.css';
import JobReviewCardContainer from './JobReviewCardContainer';
//import JobReviewCard from './JobReviewCard';

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
          <div className="info pull-right">
            <i className="fa fa-lg fa-info-circle"></i> Note to Bobby
            <div className="note">
              <p>Hi Bobby, I was having fun with React and decided to expand my original demo over the weekend.</p>
            </div>
          </div>
        </div>
        <JobReviewCardContainer />
        <div className="footer">
          <p className="name">powered by <a href="http://kristacalderon.com" target="_blank">KristaCalderon</a></p>
          <p className="github pull-right">sourceCode:
            <a href="https://github.com/kamsci/word-play" target="_blank"><i className="fa fa-2x fa-github"></i></a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
