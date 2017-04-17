import React, { Component } from'react';
// import './SynonymPick.css';

///////////////////////////////////////////

class SynonymPick extends Component {

  
  render() {
    let word = this.props.wordObj.props.children.replace(/(,|:|\.)/g, "");
    console.log("Word", word)
    let list = this.props.synonyms[word];
    console.log("List", list);

    return(
      <div>
        <ul>
          {list.map((syn, i) => 
            <li key={i}>{syn}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default SynonymPick;