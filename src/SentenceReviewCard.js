import React, { Component } from 'react';
import Sentence from './Sentence';
import WordList from './WordList';
import './SentenceReviewCard.css';

///////////////////////////////////////////

class SentenceReviewCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sentence: props.job.sentence,
      wordInUse: props.job.wordInUse,
      wordList: props.job.wordList
    }
  }

  wordSwapAction = (newWord) => {
    // replace word in sentance
    let newSentence = this.state.sentence.replace(this.state.wordInUse, newWord);
    
    // switch word in sentance to wordList
    let idx = this.state.wordList.indexOf(newWord);
    // set state.wordList to variable to not change state directly
    let words = this.state.wordList;
    let newWordInUse = words.splice(idx, 1, this.state.wordInUse);
    
    // update state
    this.setState({
      sentence: newSentence,
      wordInUse: newWordInUse,
      wordList: words
    })
  }

  sentanceClickNoAction = () => {
    // No action on sentence from SentenceReviewCard
    return;
  }

  updateJobRequest = (e) => {
    e.preventDefault();
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
                    onClickFunction={this.sentanceClickNoAction} />
          <hr />
          <WordList words={this.state.wordList} 
                    wordSwapRequest={this.wordSwapAction} />
          <div>
            <button className="btn" type="button"
                    onClick={this.updateJobRequest}>Update</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SentenceReviewCard;