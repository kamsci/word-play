import React, { Component } from 'react';
//import './JobReviewCard.css';
import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewCard from './DescriptionReviewCard';

//////////////////////////////////////////

class JobReviewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }
  }

  selectSentenceForReview = (idx) => {
    this.setState({
      activeIndex: idx
    })
  }

  passUpdateJobRequest = (sentence, wordInUse, wordList) => {
    console.log("JRC clicked")
    this.props.passUpdateJobRequest(this.state.activeIndex, sentence, wordInUse, wordList)
  }
  
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
          <SentenceReviewCard
            key={this.state.activeIndex}
            job={this.props.job[this.state.activeIndex]}
            passUpdateJobRequest={this.passUpdateJobRequest}
             />
          <DescriptionReviewCard 
            title={this.props.title} 
            job={this.props.job}
            passClickFunction={this.selectSentenceForReview} />
        </div>
      </div>

    );
  }
}

export default JobReviewCard;