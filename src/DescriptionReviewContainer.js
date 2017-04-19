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
      description: this.inputStringToSpanArray(props.description)
    };
  }

  inputStringToSpanArray = (input) => {
    // Parse paragraph into array
    let inputArr = input.split(" ");
    let descriptionArr = [];
    let arrayCount = 0;
    
    for(var i =0; i <inputArr.length; i++) {
      let tempPhrase2 = inputArr[i] + " " + inputArr[i+1];
      let tempPhrase3 = inputArr[i] + " " + inputArr[i+1] + " " + inputArr[i+2];
      let id = "Word" + arrayCount;

        // if single key word
      if(this.isKeyWord(inputArr[i]) === true) {
        descriptionArr.push(<span id={id} className="match" key={arrayCount}>{inputArr[i]}</span>)
      } // if 2 word phrase
      else if (this.isKeyWord(tempPhrase2) === true) {
        descriptionArr.push(<span id={id} className="match" key={arrayCount}>{tempPhrase2}</span>)
        i++;
      } // if 3 word phrase
      else if (this.isKeyWord(tempPhrase3) === true) {
        descriptionArr.push(<span id={id} className="match" key={arrayCount}>{tempPhrase3}</span>)
        i += 2;
      } 
      else {
        descriptionArr.push(inputArr[i]);
      }
      arrayCount++;
    }
    return descriptionArr;
  }
  
  // Identify if key word/phrase is in dictionary
  isKeyWord = (word) => {
    word = word.toLowerCase();
    word = word.replace(/(,|!|\?|:|\.)/g, "");

    if(dictionary.hasOwnProperty(word)) { return true; }
    return false;
  }
  // create job description array without span elements
  inputStringToArrayWithoutSpans = (input) => {
    let inputArr = input.split(" ");
    let descriptionArr = [];
    
    for(var i =0; i <inputArr.length; i++) {
      let tempPhrase2 = inputArr[i] + " " + inputArr[i+1];
      let tempPhrase3 = inputArr[i] + " " + inputArr[i+1] + " " + inputArr[i+2];

        // if single key word
      if(this.isKeyWord(inputArr[i]) === true) {
        descriptionArr.push(inputArr[i]);
      } // if 2 word phrase
      else if (this.isKeyWord(tempPhrase2) === true) {
        descriptionArr.push(tempPhrase2);
        i++;
      } // if 3 word phrase
      else if (this.isKeyWord(tempPhrase3) === true) { 
        descriptionArr.push(tempPhrase3);
        i += 2;
      } 
      else {
        descriptionArr.push(inputArr[i]);
      }
    }
    return descriptionArr;
  }

  // replace new word with old word in job description string
  passToJobReviewCard = (wordState) => {
    let tempDescription = this.inputStringToArrayWithoutSpans(this.props.description);
    let word = wordState.props.children;
    tempDescription[wordState.key] = word;
    tempDescription = tempDescription.join(" ");

    this.props.passToJobReviewCard(tempDescription);
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ 
      bool: nextProps.bool,
      title: nextProps.title,
      description: this.inputStringToSpanArray(nextProps.description)
    });
  }
  
  render() {
    return <DescriptionReviewCard  title={this.state.title} 
                                   description={this.state.description}
                                   passToDescriptionReviewContainer={this.passToJobReviewCard} />;
  }
}

export default DescriptionReviewContainer;