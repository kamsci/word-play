import React, { Component } from 'react';
import JobReviewCard from './JobReviewCard';

class JobReviewCardContainer extends Component {
  /* Container class to handle source of data*/

  constructor() {
    super();
    this.state = {
      job: ""
    }
  }

  // Get paragraph from input
  processInput = (input) => {
    console.log("submit", input);
  }

  // Parse paragraph into sentences

  // Parse sentence into array
  
  // Identify key words/phrases is in dictionary returns synonym array

  // ?Replace key words in sentence with span elements



  render() {
    return <JobReviewCard  processInput={this.processInput} />;
  }
}

export default JobReviewCardContainer;