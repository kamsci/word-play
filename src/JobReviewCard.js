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
      editMode: true,
      title: "",
      description: ""
    }
  }

  processInput = (input) => {
    this.setState({
      editMode: false,
      description: input.description,
      title: input.title      
    });
  }

  switchToEdit = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));

  }

  componentDidUpdate = () => {
    console.log(this.state.editMode);
  }

  render() {
    return (
      <div>
        {/*<p className="intro">Click on one of the alternative words to replace the highlighted word in your sentence:</p>*/}
        <div className="container jobDescription">
          {this.state.editMode &&
            <JobForm processInput={this.processInput} />
          }
          {!this.state.editMode &&
            <div>
              <DescriptionReviewContainer title={this.state.title} description={this.state.description} />
              <button onClick={this.switchToEdit} type="button" className="btn">Edit</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default JobReviewCard;