import React, { Component } from 'react';
import './Sentence.css';

///////////////////////////////////////////

const Sentence = (props) => {
  let re = new RegExp(props.wordInUse, "i")
  var parts = props.sentence.split(re);
  parts.splice(1, 0, <span className="match" key={1}>{props.wordInUse}</span>);

  return(
    <p className="sentence">{parts}</p>
  )
}

export default Sentence;