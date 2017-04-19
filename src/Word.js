import React, { Component } from 'react';
import SynonymPick from './SynonymPick';
import ToolTip from 'react-portal-tooltip';
import './Word.css';

///////////////////////////////////////////

class Word extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordObj: props.wordObj,
      isTooltipActive: false
    }
  }

  componentWillReceiveProps(nextProps) {
   this.setState({
      wordObj: nextProps.wordObj
    });
  }

  showTooltip = () => {
    this.setState({isTooltipActive: true})
  }

  hideTooltip = () => {
    this.setState({isTooltipActive: false})
  }

  swapWord = (syn) => {
    let key = this.state.wordObj.key;
    let id = "Word" + key;
    let tempObj = <span id={id} className="match" key={key}>{syn}</span>

    this.setState({
      wordObj: tempObj
    });

    this.props.passToDescriptionReview(tempObj);
  }

  style = {
    style: {
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
    if(this.state.wordObj.props) {
      id += this.state.wordObj.props.id;
    }
    return (
      <span>
        <span onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>{this.state.wordObj} </span>
        {this.state.wordObj.props && 
          <ToolTip active={this.state.isTooltipActive} style={this.style} position="top" arrow="center" parent={id}>
            <SynonymPick key={id}
                          wordObj={this.props.wordObj}
                          swapWord={this.swapWord} />
          </ToolTip>
        }
      </span>
    )
  }
}

export default Word;