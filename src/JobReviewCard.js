import React, { Component } from 'react';
//import './JobReviewCard.css';
import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewCard from './DescriptionReviewCard';

//////////////////////////////////////////

class JobReviewCard extends Component {

  render() {
    return (
      <div>
        <p className="intro">Click on one of the alternative words to replace the highlighted word in your sentence:</p>
        <SentenceReviewCard />
        <DescriptionReviewCard />
      </div>

    );
  }
}

export default JobReviewCard;