import React, { Component } from 'react';
import SynonymPick from './SynonymPick'
import ToolTip from 'react-portal-tooltip';
import './Word.css';

///////////////////////////////////////////

class Word extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.word,
      isTooltipActive: false
    }
  }

  showTooltip = () => {
    this.setState({isTooltipActive: true})
  }

  hideTooltip = () => {
    this.setState({isTooltipActive: false})
  }

  changeWord = (syn) => {
    this.setState({
      word: syn
    })
  }

  style = {
    style: {
      // background: 'rgba(0,0,0,.8)',
      border: '1px solid rgba(249, 161, 50, 1)',
      padding: 20,
      boxShadow: '5px 5px 3px rgba(0,0,0,.3)'
    },
    arrowStyle: {
      borderColor: 'rgba(249, 161, 50, 1)'
    }
  }

  render() {
    let id = "#";
    if(this.props.word.props) {
      id += this.props.word.props.id;
    }
    return (
      <span>
        <span onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>{this.state.word} </span>
        {this.props.word.props && 
          <ToolTip active={this.state.isTooltipActive} style={this.style} position="top" arrow="center" parent={id}>
            <SynonymPick key={id} 
                          synonyms={this.props.synonyms}
                          wordObj={this.props.word}
                          changeWord={this.changeWord} />
          </ToolTip>
        }
      </span>
    )
  }
}

export default Word;