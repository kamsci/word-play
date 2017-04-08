import React, { Component } from 'react';
import JobReviewCard from './JobReviewCard';

class JobReviewCardContainer extends Component {
  /* Container class to handle source of data*/

  constructor() {
    super();
    this.state = {
      title: "Senior Product Manager - Game Commerce",
      job: [
        {
          sentence: "The Super Games Seattle team is seeking a Senior Product Manager to define and drive user experiences for our Game Commerce projects. ",
          wordInUse: "drive",
          WordList: ["advance", "promote", "enrich"]
        },
        {
          sentence: "As a Senior Product Manager for Super Games Game Commerce, you will execute a product road map that adds great value to Super Games’s viewers, broadcasters, and participating game developers. ",
          wordInUse: "execute",
          WordList: ["implement", "fulfil", "deliver"]
        },
        {
          sentence: "You will work closely with engineering, design, operations, finance and executive teams to bring features to market and develop and grow business opportunities for Super Games. ",
          wordInUse: "work closely",
          WordList: ["collaborate", "work in partnership", "join forces"]
        },
        {
          sentence: "We’d like your help leading one of Super Games’s signature initiatives for 2017. ",
          wordInUse: "leading",
          WordList: ["piloting", "steering", "directing"]
        }
      ]
    }
  }

  futureDatabaseCall() {
    /*  Replace hard-coded job
        Populate state.title and state.job from database call 
      
      ajax({
      });
    */
  }

  render() {
    return <JobReviewCard title={this.state.title} job={this.state.job}/>;
  }
}

export default JobReviewCardContainer;