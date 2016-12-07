import React, { Component } from 'react';

export default class HightPanel extends Component {



  render() {
    return (
      <div className="HightPanel">
        <div className='source'>Цитата.ру</div>
        <div className='qoute'>{this.props.quote.quote}</div>
      </div>
    );
  }
}