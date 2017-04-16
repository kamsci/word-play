import React, { Component } from 'react';
import Sentence from './Sentence';
import WordList from './WordList';
import './SentenceReviewCard.css';

///////////////////////////////////////////

class SentenceReviewCard extends Component {
  constructor(props) {
    super(props);

  }
      
  render() {
    return (
      <div className="container shadow">
        <div className="reviewBox">
          <Sentence  />
          <hr />
          <WordList  />
        </div>
      </div>
    )
  }
}

export default SentenceReviewCard;