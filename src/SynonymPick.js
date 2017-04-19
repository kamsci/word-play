import React, { Component } from'react';
import './SynonymPick.css';
import dictionary from './dictionary.json';

///////////////////////////////////////////

class SynonymPick extends Component {
  constructor(props) {
    super(props);
    let getWord = props.wordObj.props.children.replace(/(,|!|\?|:|\.)/g, "");

    this.state = {
      synonyms: this.getSynonyms(getWord)
    }
  }
  
  getSynonyms = (word) => {
    let synonyms = dictionary[word];
    return synonyms;
  }

  swapWord = (syn) => {
    this.props.swapWord(syn);
    this.setState({
      synonyms: this.getSynonyms(syn)
    });
  }

  componentWillReceiveProps(nextProps) {
    let getWord = nextProps.wordObj.props.children.replace(/(,|!|\?|:|\.)/g, "");
    this.setState({ 
      synonyms: this.getSynonyms(getWord)
    });  
  }
  
  render() {
    return(
      <div>
        <p>Other words you can try:</p>
        <hr />
        <div className="synonymBox">
          {this.state.synonyms.map((syn, i) => 
            <div key={i} 
                className="syn"
                onClick={() => this.swapWord(syn)}>{syn}</div>
          )}
        </div>
      </div>
    )
  }
}

export default SynonymPick;