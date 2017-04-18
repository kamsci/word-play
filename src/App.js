import React, { Component } from 'react';
import './App.css';
import JobReviewCard from './JobReviewCard';
//import JobReviewCard from './JobReviewCard';
import dictionary from '../dictionary.json';

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
            <i className="fa fa-lg fa-info-circle"></i> Available key words
            <div className="note">
              <h4>Available key words:</h4>
              {Object.keys(dictionary).map((key, i) =>
                <li key={i}>{key}</li>
              )}
            </div>
          </div>
        </div>
        <JobReviewCard />
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
