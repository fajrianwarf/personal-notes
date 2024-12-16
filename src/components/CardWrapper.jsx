import React, { Component } from 'react';

class CardWrapper extends Component {
  render() {
    return <div className='notes-list'>{this.props.children}</div>;
  }
}

export default CardWrapper;
