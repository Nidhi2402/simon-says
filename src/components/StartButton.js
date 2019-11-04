import React, { Component } from 'react';

class StartButton extends Component{
  render() {
      return (
          <button className={this.props.className} onClick={() => this.props.onClick()}>{this.props.value}</button>
      );
  }
}

  export default StartButton;