import React, { Component } from 'react';
import './WordList.css';

///////////////////////////////////////////

const WordList = (props) => {
  return (
    <div className="wordBox">
      {props.words.map((word, i) =>
      <span className="wordList" key={i} onClick={() => props.wordSwapRequest(word)}>{word}</span>
      )}
    </div>
  )
}

export default WordList;