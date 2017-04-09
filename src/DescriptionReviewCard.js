import React, { Component } from 'react';
import Sentence from './Sentence';
import './DescriptionReviewCard.css';

///////////////////////////////////////////

class DescriptionReviewCard extends Component {

  handleClick = (idx) => {
    this.props.passClickFunction(idx)
  }

  sentenceDescriptionStyle = {
    fontSize: "18px",
    lineHeight: "30px",
    cursor: "pointer"
  }

  render() {
    return (
      <div className="container page">
        <div className="descriptionBox">
          <h3>{this.props.title}</h3>
          <p>{this.props.job.map((sentenceObj, i) =>
            <Sentence key={i} 
                      sentenceStyle={this.sentenceDescriptionStyle} 
                      sentence={sentenceObj.sentence} 
                      wordInUse={sentenceObj.wordInUse}
                      onClickFunction={() => this.handleClick(i)} /> 
          )}
          </p>
        </div>
      </div>
    )
  }
}

export default DescriptionReviewCard;