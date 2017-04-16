import React, { Component } from 'react';
import './JobForm.css';

///////////////////////////////////////////

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleTitleChange = (event) => {
    // console.log("submit title", event)
    this.setState({
      title: event.target.value
    })
  }
  handleDescriptionChange = (event) => {
    // console.log("submit description", event)
    this.setState({
      description: event.target.value
    })
  }
  
  submitForm = (event) => {
    event.preventDefault();
    console.log("submit", this.state.title, this.state.description)
  }

  render() {
    return(
      <div className="continer form">
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <input id="title" 
                   type="text"
                   value={this.state.title}
                   onChange={this.handleTitleChange} 
                   className="form-control" 
                   placeholder="Job Title" />
          </div>
          <div className="form-group">
            <textarea id="description" 
                      type="text"
                      value={this.state.description}
                      onChange={this.handleDescriptionChange} 
                      className="form-control" 
                      placeholder="Job Descrption paragraph - no list items"/>
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    )
  }
  
}

export default JobForm;