import React, { Component } from 'react';
import Word from './Word';
import './DescriptionReviewCard.css';

///////////////////////////////////////////

class DescriptionReviewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipActive: true
    }
  }

  render() {
    return (
        <div className="descriptionBox">
          <h3>{this.props.title}</h3>
          {this.props.description.map((word, i) => 
            <Word key={i}
                  word={word} />
          )}
        </div>
    )
  }
}

export default DescriptionReviewCard;