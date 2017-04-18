import React, { Component } from'react';
import './SynonymPick.css';
import dictionary from '../dictionary.json';

///////////////////////////////////////////

class SynonymPick extends Component {
  constructor(props) {
    super(props);
    let word = props.wordObj.props.children.replace(/(,|:|\.)/g, "");

    this.state = {
      synonyms: this.getSynonyms(word)
    }
  }
  
  getSynonyms = (word) => {
    let synonyms = dictionary[word];
    return synonyms;
  }

  changeWord = (syn) => {
    this.props.changeWord(syn);
    this.setState({
      synonyms: this.getSynonyms(syn)
    });
  }

  componentWillReceiveProps(nextProps) {
    let word = nextProps.wordObj.props.children.replace(/(,|:|\.)/g, "");
    this.setState({ 
      synonyms: this.getSynonyms(word)
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
                onClick={() => this.changeWord(syn)}>{syn}</div>
          )}
        </div>
      </div>
    )
  }
}

export default SynonymPick;