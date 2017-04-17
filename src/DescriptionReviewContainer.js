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

  // Get paragraph from input
  inputStringToArray = (input) => {
    // Parse paragraph into array
    let inputArr = input.split(" ");
    let descriptionArr = inputArr.map((word, i) => {
      if(this.isKeyWord(word) === true) {
        return <span className="match" key={i}>{word}</span>
      }
        return word
    })
    console.log("description", descriptionArr)
    return descriptionArr;
  }
  
  // Identify single key words/phrases is in dictionary
  isKeyWord = (word) => {
    word = word.toLowerCase();
    if(dictionary.hasOwnProperty(word)) {
      this.synonyms[word] = dictionary[word];
      return true;
    }
    return false;
  }

 // Identify 2 word clusters
 isKeyTwoWords =(word) => {

 }
  componentDidMount = () => {
    console.log("DidMount", this.state)
    // this.setState({
    //   title: this.props.title
    // })
  }

    componentDidUpdate = () => {
    console.log("DidUpdate", this.state)
  }
  

  // Replace key words in sentence with span elements



  render() {
    return <DescriptionReviewCard  title={this.state.title} description={this.state.description} />;
  }
}

export default DescriptionReviewContainer;