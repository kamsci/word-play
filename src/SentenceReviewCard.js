import React, { Component } from 'react';
import Sentence from './Sentence';
import WordList from './WordList';
import './SentenceReviewCard.css';

///////////////////////////////////////////

class SentenceReviewCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeWordIdx: 0,
      sentence: props.job.sentence,
      wordInUse: props.job.wordInUse,
      wordList: props.job.wordList
    }
  }

  wordSwapAction = (newWord) => {
    // create local variables
    let wordIdx = this.state.activeWordIdx;
    let word = this.state.wordInUse;
    let words = this.state.wordList;

    // replace word with newWord in sentance
    let newSentence = this.state.sentence.replace(word[wordIdx], newWord);
    
    // switch word with newWord in wordList
    let idx = words[wordIdx].indexOf(newWord);
    words[wordIdx].splice(idx, 1, word[wordIdx]);
    word.splice(wordIdx, 1, newWord);
    
    // update state
    this.setState({
      sentence: newSentence,
      wordInUse: word,
      wordList: words
    })
    let wordTemp = this.state.wordInUse;
    wordTemp.splice(wordIdx, 1, newWord)
  }

  sentanceClickNoAction = () => {
    // No action on sentence from SentenceReviewCard
    return;
  }

  updateJobRequest = () => {
    this.props.passUpdateJobRequest(this.state.sentence, this.state.wordInUse, this.state.wordList)
  }

  sentenceReviewStyle = {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "25px"
  }
  
      
  render() {
    return (
      <div className="container shadow">
        <div className="reviewBox">
          <Sentence sentenceStyle={this.sentenceReviewStyle} 
                    sentence={this.state.sentence} 
                    wordInUse={this.state.wordInUse}
                    activeWordIdx={this.state.activeWordIdx}
                    onClickFunction={this.sentanceClickNoAction} />
          <hr />
          <WordList words={this.state.wordList[this.state.activeWordIdx]} 
                    wordSwapRequest={this.wordSwapAction} />
          <div>
            <button className="btn" type="button"
                    onClick={this.updateJobRequest}>Update</button>
            <div className="arrows pull-right">
              <button className="btn arrow"><i className="fa fa-arrow-left"></i></button>
              <button className="btn arrow"><i className="fa fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SentenceReviewCard;