import React, { Component } from 'react';
import Sentence from './Sentence';
import WordList from './WordList';
import './SentenceReviewCard.css';

///////////////////////////////////////////

class SentenceReviewCard extends Component {
  state = {
    sentence: 'For this position, outside the box thinking is a must.',
    wordInUse: 'outside the box',
    wordList: ['creative', 'imaginative', 'innovative' ]
  }

  wordSwapAction = (newWord) => {
    // replace word in sentance
    let newSentence = this.state.sentence.replace(this.state.wordInUse, newWord);
    
    // switch word in sentance to wordList
    let idx = this.state.wordList.indexOf(newWord);
    let newWordInUse = this.state.wordList.splice(idx, 1, this.state.wordInUse);
    
    // update state
    this.setState({
      sentence: newSentence,
      wordInUse: newWordInUse,
      wordList: this.state.wordList
    })
  }

  sentenceBoxStyle = {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    fontSize: "22px"
  }
  
      
  render() {
    return (
      <div className="container shadow">
        <div className="reviewBox">
          <Sentence sentenceStyle={this.sentenceBoxStyle} sentence={this.state.sentence} wordInUse={this.state.wordInUse}/>
          <hr />
          <WordList words={this.state.wordList} wordInUse={this.state.wordInUse} wordSwapRequest={this.wordSwapAction} />
        </div>
      </div>
    )
  }
}

export default SentenceReviewCard;