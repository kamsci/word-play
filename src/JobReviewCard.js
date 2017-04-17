import React, { Component } from 'react';
//import './JobReviewCard.css';
// import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewContainer from './DescriptionReviewContainer';
import JobForm from './JobForm';

//////////////////////////////////////////

class JobReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Letter Opener",
      description: "The Super Games Seattle team is seeking a Senior Product Manager to define and drive user experiences for our Game Commerce projects. As a Senior Product Manager for Super Games Game Commerce, you will execute a product road map that adds great value to Super Games’s viewers, broadcasters, and participating game developers. For this position, outside the bix thinking is a must. You will work closely with engineering, design, operations, finance and executive teams to bring features to market and develop and grow business opportunities for Super Games. We'd like your help leading one of Super Games’s signature initiatives for 2017."
    }
  }

  processInput = (input) => {
    console.log("JobReview", input);
    this.setState({
      title: input.title,
      description: input.description
    })
  }

  componentDidUpdate = () => {
    console.log("DidUpdate", this.state)
  }

  render() {
    return (
      <div>
        <p className="intro">Click on one of the alternative words to replace the highlighted word in your sentence:</p>
        <div className="container jobDescription">
          <DescriptionReviewContainer title={this.state.title} description={this.state.description} />
          <JobForm processInput={this.processInput} />
        </div>
      </div>
    );
  }
}

export default JobReviewCard;