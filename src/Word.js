import React, { Component } from 'react';
import SynonymPick from './SynonymPick'
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

  changeWord = (syn) => {
    let key = this.state.wordObj.props.id.replace("#", "")
    let tempObj = <span id={this.state.wordObj.props.id} className="match" key={key}>{syn}</span>;

    this.setState({
      wordObj: tempObj
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
                          changeWord={this.changeWord} />
          </ToolTip>
        }
      </span>
    )
  }
}

export default Word;