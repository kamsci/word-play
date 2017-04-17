import React, { Component } from 'react';
import './Word.css';
import ToolTip from 'react-portal-tooltip';
///////////////////////////////////////////

class Word extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipActive: false
    }
  }

  showTooltip = () => {
        this.setState({isTooltipActive: true})
    }
    hideTooltip = () => {
        this.setState({isTooltipActive: false})
    }
 
  render() {
    let id = "#";
    if(this.props.word.props) {
      id += this.props.word.props.id;
    }
    return (
      <span>
        <span onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>{this.props.word} </span>
        {this.props.word.props && 
          <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={id}>
            <div>
              <p>This is the content of the tooltip</p>
            </div>
          </ToolTip>
        }
      </span>
    )
  }
}

export default Word;