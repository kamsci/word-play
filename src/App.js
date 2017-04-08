import React, { Component } from 'react';
import './App.css';
import JobReviewCardContainer from './JobReviewCardContainer';
//import JobReviewCard from './JobReviewCard';

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div>
        <JobReviewCardContainer />
        <div className="footer">
          <p className="name">powered by KristaCalderon</p>
          <p className="github pull-right">sourceCode:
            <a href="https://github.com/kamsci/word-play" target="_blank"><i className="fa fa-2x fa-github"></i></a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
