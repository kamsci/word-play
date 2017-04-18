import React, { Component } from 'react';
// import './JobReviewCard.css';
// import SentenceReviewCard from './SentenceReviewCard';
import DescriptionReviewContainer from './DescriptionReviewContainer';
import JobForm from './JobForm';

//////////////////////////////////////////

class JobReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
      title: "",
      description: ""
    }
  }

  setBool = () => {
    this.setState (prevState => ({
      bool: prevState.bool ? false : true
    }))
  }

  processInput = (input) => {
    this.setState({
      description: input.description,
      title: input.title,
      
    })
  }

  render() {
    return (
      <div>
        {/*<p className="intro">Click on one of the alternative words to replace the highlighted word in your sentence:</p>*/}
        <div className="container jobDescription">
          <DescriptionReviewContainer title={this.state.title} description={this.state.description} bool={this.state.bool} />
          <JobForm processInput={this.processInput} setBool={this.setBool}/>
        </div>
      </div>
    );
  }
}

export default JobReviewCard;