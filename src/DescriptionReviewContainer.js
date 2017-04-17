import React, { Component } from 'react';
import DescriptionReviewCard from './DescriptionReviewCard';
import dictionary from '../dictionary.json';

class DescriptionReviewContainer extends Component {
  /* Container class to handle source of data*/

  constructor(props) {
    super(props);
    this.synonyms = {};
    this.state = {
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
      let id = "W" + i;

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
    return descriptionArr;
  }
  
  // Identify if key word/phrase is in dictionary
  isKeyWord = (word) => {
    word = word.toLowerCase();
    word = word.replace(/(,|:|\.)/g, "");

    if(dictionary.hasOwnProperty(word)) {
      this.synonyms[word] = dictionary[word];
      return true;
    }
    return false;
  }

  // componentDidMount = () => {
  //   console.log("DidMount", this.state)
  //   // this.setState({
  //   //   title: this.props.title
  //   // })
  // }

  //   componentDidUpdate = () => {
  //   console.log("DidUpdate", this.state)
  // }

  render() {
    return <DescriptionReviewCard  title={this.state.title} description={this.state.description} synonyms={this.synonyms}/>;
  }
}

export default DescriptionReviewContainer;