import React, { Component } from 'react';
import HightPanel from './HightPanel'
import DownPanel from './DownPanel'
import './stylesheets/screen.css';

const quotes = 
[
  {
    "author": "Черчилль",
    "quote": "\"Врождённый порок капитализма – неравное распределение благ; врождённое достоинство социализма — равное распределение нищеты.\"",
    "avatar": "cherchill"
  },
  {
    "author": "Эйнштейн",
    "quote": "\"Я не просто пацифист, я воинствующий пацифист. Я готов бороться за мир. Ничто не закончится войной, если сами люди откажутся идти на войну.\"",
    "avatar": "einstein"
  },
  {
    "author": "Твен",
    "quote": "\"Держись подальше от людей, которые глумятся над твоими устремлениями. Маленькие люди всегда делают это, в то время как великие люди всегда дают тебе почувствовать, что и ты тоже можешь стать великим.\"",
    "avatar": "twan"
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

