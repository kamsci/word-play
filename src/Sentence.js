import React, { Component } from 'react';
import './Sentence.css';

///////////////////////////////////////////

const Sentence = (props) => {
  console.log(props);
  let re = new RegExp(props.wordInUse, "i")
  var parts = props.sentence.split(re);
  parts.splice(1, 0, <span className="match" key={1}>{props.wordInUse}</span>);

  return(
    <span style={props.sentenceStyle}>{parts}</span>
  )
}

export default Sentence;