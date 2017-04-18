import React, { Component } from 'react';
import './JobReviewCard.css';
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
      <div className="container jobDescription">
        {this.state.editMode &&
          <div>
            <p className="intro">Submit a job description and we'll provide some alternative word suggestions.</p>
            <JobForm processInput={this.processInput} />
          </div>
        }
        {!this.state.editMode &&
          <div>
            <p className="intro">Hover over a highlighted word to see your synonym options, click to select.</p>
            <DescriptionReviewContainer title={this.state.title} description={this.state.description} />
            <button onClick={this.switchToEdit} type="button" className="btn">Edit</button>
          </div>
        }
      </div>      
    );
  }
}

export default JobReviewCard;