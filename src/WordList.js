import React, { Component } from 'react';
import './WordList.css';

///////////////////////////////////////////

const WordList = (props) => {
  return (
    <div className="wordBox">
      <span className="wordList">List</span>
      <span className="wordList">of</span>
      <span className="wordList">words</span>
    </div>
  )
}

export default WordList;