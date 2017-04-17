import React, { Component } from'react';
import './SynonymPick.css';

///////////////////////////////////////////

class SynonymPick extends Component {
  changeWord = (syn) => {
    this.props.changeWord(syn);
  }
  
  render() {
    let word = this.props.wordObj.props.children.replace(/(,|:|\.)/g, "");
    let list = this.props.synonyms[word];

    return(
      <div>
        <p>Other words you can try:</p>
        <hr />
        <div className="synonymBox">
          {list.map((syn, i) => 
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