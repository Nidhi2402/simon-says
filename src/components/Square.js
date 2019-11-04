import React, { Component } from 'react';

class Square extends Component{
  render() {
      return (
          <button className={this.props.className}></button>
      );
  }
}

  export default Square;