import React, { Component } from 'react';
import Sentence from './Sentence';
import './DescriptionReviewCard.css';

///////////////////////////////////////////

class DescriptionReviewCard extends Component {
  state = {
    title: "Senior Product Manager - Game Commerce",
    job: [
      {
        sentence: "The Super Games Seattle team is seeking a Senior Product Manager to define and drive user experiences for our Game Commerce projects. ",
        wordInUse: "drive",
        WordList: ["advance", "promote", "enrich"]
      },
      {
        sentence: "As a Senior Product Manager for Super Games Game Commerce, you will execute a product road map that adds great value to Super Games’s viewers, broadcasters, and participating game developers. ",
        wordInUse: "execute",
        WordList: ["implement", "fulfil", "deliver"]
      },
      {
        sentence: "You will work closely with engineering, design, operations, finance and executive teams to bring features to market and develop and grow business opportunities for Super Games. ",
        wordInUse: "work closely",
        WordList: ["collaborate", "work in partnership", "join forces"]
      },
      {
        sentence: "We’d like your help leading one of Super Games’s signature initiatives for 2017. ",
        wordInUse: "leading",
        WordList: ["piloting", "steering", "directing"]
      }

    ]
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
          <h3>{this.state.title}</h3>
          <p>{this.state.job.map((sentenceObj, i) =>
            <Sentence key={i} sentenceStyle={this.sentenceDescriptionStyle} sentence={sentenceObj.sentence} wordInUse={sentenceObj.wordInUse}/>
          )}
          </p>
        </div>
      </div>
    )
  }
}

export default DescriptionReviewCard;