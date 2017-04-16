import React, { Component } from 'react';
import Sentence from './Sentence';
import './DescriptionReviewCard.css';

///////////////////////////////////////////

class DescriptionReviewCard extends Component {

  render() {
    return (
      <div className="container page">
        <div className="descriptionBox">
          <h3>Title</h3>
          <p>Job Description</p>
        </div>
      </div>
    )
  }
}

export default DescriptionReviewCard;