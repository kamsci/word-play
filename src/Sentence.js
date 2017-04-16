import React, { Component } from 'react';
import './Sentence.css';

///////////////////////////////////////////

class Sentence extends Component {

  
  render() {

    return(
      <span style={this.props.sentenceStyle}>
      </span>
    )
  }
  
}

export default Sentence;