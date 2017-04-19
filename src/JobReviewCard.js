import React, { Component } from 'react';
import './JobReviewCard.css';
import DescriptionReviewContainer from './DescriptionReviewContainer';
import JobForm from './JobForm';
import defaultJob from './defaultJob.json';

//////////////////////////////////////////

class JobReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      title: defaultJob.title,
      description: defaultJob.description
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

  updateDescription = (newDescription) => {
    this.setState({
      description: newDescription
    })
  }

  render() {
    return (
      <div className="container jobDescription">
        {this.state.editMode &&
          <div>
            <div className="intro">
              <p>Submit a job description and we'll highlight some key performance words and provide alternative word suggestions.</p>
            </div>
            <JobForm processInput={this.processInput} 
                     title={this.state.title}
                     description={this.state.description} />
          </div>
        }
        {!this.state.editMode &&
          <div>
            <div className="intro">
              <p>Hover over a highlighted word to see your alternative word options. Click on a word to select and replace.</p>
            </div>
            <DescriptionReviewContainer title={this.state.title} 
                                        description={this.state.description}
                                        passToJobReviewCard={this.updateDescription} />
            <p className="tip"><small>Don't worry, if you need to edit your original description, your new word options will be saved!</small></p>
            <button onClick={this.switchToEdit} type="button" className="btn">Edit</button>
          </div>
        }
      </div>      
    );
  }
}

export default JobReviewCard;