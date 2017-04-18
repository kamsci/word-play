import React, { Component } from 'react';
import DescriptionReviewCard from './DescriptionReviewCard';
import dictionary from '../dictionary.json';

class DescriptionReviewContainer extends Component {
  /* Container class to handle source of data*/

  constructor(props) {
    super(props);

    this.state = {
      bool: props.bool,
      title: props.title,
      description: this.inputStringToArray(props.description)
    };
  }

  inputStringToArray = (input) => {
    // Parse paragraph into array
    let inputArr = input.split(" ");
    let descriptionArr = [];
    
    for(var i =0; i <inputArr.length; i++) {
      let tempPhrase2 = inputArr[i] + " " + inputArr[i+1];
      let tempPhrase3 = inputArr[i] + " " + inputArr[i+1] + " " + inputArr[i+2];
      let id = "Word" + i;

        // if single key word
      if(this.isKeyWord(inputArr[i]) === true) {
        descriptionArr.push(<span id={id} className="match" key={id}>{inputArr[i]}</span>)
      } // if 2 word phrase
      else if (this.isKeyWord(tempPhrase2) === true) {
        descriptionArr.push(<span id={id} className="match" key={id}>{tempPhrase2}</span>)
        i++;
      } // if 3 word phrase
      else if (this.isKeyWord(tempPhrase3) === true) { 
        descriptionArr.push(<span id={id} className="match" key={id}>{tempPhrase3}</span>)
        i += 2;
      } 
      else {
        descriptionArr.push(inputArr[i]);
      }
    }
    return descriptionArr;
  }
  
  // Identify if key word/phrase is in dictionary
  isKeyWord = (word) => {
    word = word.toLowerCase();
    word = word.replace(/(,|:|\.)/g, "");

    if(dictionary.hasOwnProperty(word)) { return true; }
    return false;
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ 
      bool: nextProps.bool,
      title: nextProps.title,
      description: this.inputStringToArray(nextProps.description)
    });
  }

  render() {
    return <DescriptionReviewCard  title={this.state.title} description={this.state.description} bool={this.state.bool} />;
  }
}

export default DescriptionReviewContainer;