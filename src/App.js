import React, { Component } from 'react';
import HightPanel from './HightPanel'
import DownPanel from './DownPanel'
import './stylesheets/screen.css';

const quotes = 
[
  {
    "author": "Черчилль",
    "quote": "\"Кто в молодости короче че то там\"",
    "avatar": "cherchill"
  },
  {
    "author": "Эйнштейн",
    "quote": "\"Этим человеком был Альберт\"",
    "avatar": "cherchill"
  }
]

export default class App extends Component {

  index;

  constructor()
  {
    super();
    this.index = 0;
    this.state = {currentQuote: quotes[this.index]};
  }

  previousQuote(e)
  {
    this.index--;
    if (this.index < 0)
      this.index = quotes.length-1;
    
    this.setState({currentQuote: quotes[this.index]})
  }

  nextQuote(e)
  {
    this.index++;
    if (this.index == quotes.length)
      this.index = 0;
    
    this.setState({currentQuote: quotes[this.index]})
  }

  render() {
    return (
      <div className="mainConteiner">
         <HightPanel quote={this.state.currentQuote}/>
         <DownPanel quote={this.state.currentQuote}/>
            <div onClick={this.previousQuote.bind(this)} className="back"/>
            <div onClick={this.nextQuote.bind(this)} className="next"/>
         
      </div>
    );
  }
}

