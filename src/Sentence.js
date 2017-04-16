import React, { Component } from 'react';
import './Sentence.css';

///////////////////////////////////////////

class Sentence extends Component {

  handleClick = () => {
    this.props.onClickFunction()
  }
  
  render() {
    let sentenceArr = [this.props.sentence];
    let wordsArr = this.props.wordInUse;
    let sentanceFormatIdx = 0;

    for(var i = 0; i < wordsArr.length; i++) {
      let re = new RegExp(this.props.wordInUse[i], "i")
      console.log("re", re)

      let temp = sentenceArr[sentanceFormatIdx].split(re);
      console.log("temp", temp, sentanceFormatIdx)
      if(i === this.props.activeWordIdx) {
        temp.splice(1, 0, <span className="match active" key={i}>{wordsArr[i]}</span>);
      } else {
        temp.splice(1, 0, <span className="match" key={i}>{wordsArr[i]}</span>);
      }

      sentenceArr.splice(sentanceFormatIdx, 1);
      sentenceArr = sentenceArr.concat(temp);

      sentanceFormatIdx = sentanceFormatIdx + 2;
      console.log("new", sentenceArr, sentenceArr.length)
    }

    return(
      <span style={this.props.sentenceStyle}
            onClick={this.handleClick}>{sentenceArr}</span>
    )
  }
  
}

export default Sentence;