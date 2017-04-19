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
        descriptionArr.push(<span id={id} className="match" key={i}>{inputArr[i]}</span>)
      } // if 2 word phrase
      else if (this.isKeyWord(tempPhrase2) === true) {
        descriptionArr.push(<span id={id} className="match" key={i}>{tempPhrase2}</span>)
        i++;
      } // if 3 word phrase
      else if (this.isKeyWord(tempPhrase3) === true) { 
        descriptionArr.push(<span id={id} className="match" key={i}>{tempPhrase3}</span>)
        i += 2;
      } 
      else {
        descriptionArr.push(inputArr[i]);
      }
    }
    // console.log("descriptionArr: ", descriptionArr)
    return descriptionArr;
  }
  
  // Identify if key word/phrase is in dictionary
  isKeyWord = (word) => {
    word = word.toLowerCase();
    word = word.replace(/(,|!|\?|:|\.)/g, "");

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

  passToJobReviewCard = (wordState) => {
    // console.log("DRC wordState", wordState, wordState.key)
    // console.log("DRC this", this.state.description[wordState.key])
    let tempDescription = this.state.description;
    tempDescription[wordState.key] = wordState;
    // console.log("temp", tempDescription)
  }

  render() {
    return <DescriptionReviewCard  title={this.state.title} 
                                   description={this.state.description}
                                   passToDescriptionReviewContainer={this.passToJobReviewCard} />;
  }
}

export default DescriptionReviewContainer;