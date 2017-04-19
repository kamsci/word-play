import React, { Component } from 'react';
// import './JobForm.css';

///////////////////////////////////////////

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  
  submitForm = (event) => {
    this.props.processInput(this.state);
    event.preventDefault();
  }

  clearForm = (event) => {
    this.setState({
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <input id="title" 
                  type="text"
                  value={this.state.title}
                  onChange={this.handleTitleChange} 
                  className="form-control" 
                  placeholder="Job title"
                  required />
        </div>
        <div className="form-group">
          <textarea id="description" 
                    type="text"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange} 
                    className="form-control descriptionBox" 
                    placeholder="Plain text job descrption"
                    required />
        </div>
         <p className="tip"><small>See our list of key words by hovering over the info icon in the top right corner.</small></p>
        <div>
          <input type="submit" className="btn" value="Save" />
          <button className="btn btn-danger pull-right" onClick={this.clearForm}>Clear</button>
        </div>
      </form>
    )
  }
  
}

export default JobForm;