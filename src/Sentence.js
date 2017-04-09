import React, { Component } from 'react';
import './Sentence.css';

///////////////////////////////////////////

class Sentence extends Component {

  handleClick = () => {
    this.props.onClickFunction()
  }
  
  render() {
    let re = new RegExp(this.props.wordInUse, "i")
    var parts = this.props.sentence.split(re);
    parts.splice(1, 0, <span className="match" key={1}>{this.props.wordInUse}</span>);

    return(
      <span style={this.props.sentenceStyle}
            onClick={this.handleClick}>{parts}</span>
    )
  }
  
}

export default Sentence;