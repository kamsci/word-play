import React, { Component } from 'react';
//import './JobReviewCard.css';
import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewCard from './DescriptionReviewCard';
import JobForm from './JobForm';

//////////////////////////////////////////

class JobReviewCard extends Component {

  render() {
    return (
      <div>
        <p className="intro">Click on one of the alternative words to replace the highlighted word in your sentence:</p>
        <SentenceReviewCard />
        <div className="container jobDescription">
          <DescriptionReviewCard />
          <JobForm />
        </div>
      </div>

    );
  }
}

export default JobReviewCard;