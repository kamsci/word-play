import React, { Component } from 'react';
import Word from './Word';
import './DescriptionReviewCard.css';


///////////////////////////////////////////

class DescriptionReviewCard extends Component {

  render() {
    return (
      <div className="jobBox">
        <h4>{this.props.title}</h4>
        <div className="descriptionBox">
          {this.props.description.map((word, i) => 
            <Word key={i}
                  wordObj={word} />
          )}
        </div>
      </div>
    )
  }
}

export default DescriptionReviewCard;