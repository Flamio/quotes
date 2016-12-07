import React, { Component } from 'react';

export default class DownPanel extends Component {
  render() {
    return (
      <div className="DownPanel">
        <div className={this.props.quote.avatar}></div>
        <div className='AuthorName'>{this.props.quote.author}</div>
      </div>
    );
  }
}