import React, { Component } from 'react';
//import './JobReviewCard.css';
import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewCard from './DescriptionReviewCard';

//////////////////////////////////////////

class JobReviewCard extends Component {

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
          <p className="intro">Click on one of the alternative words to replace the highlighted word in your sentence:</p>
          <SentenceReviewCard job={this.props.job[0]} />
          <DescriptionReviewCard title={this.props.title} job={this.props.job} />
        </div>
      </div>

    );
  }
}

export default JobReviewCard;