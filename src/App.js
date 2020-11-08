import React from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';
import axios from 'axios';

const simpsonCharacter =   {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left"
 }
  

class App extends React.Component {
  state = {
    character: simpsonCharacter
    }
  getQuote = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          character: data[0],
        })
      })
  }
  render() {
    return (
      <div className="App">
        <QuoteCard character={this.state.character} />
        <button type="button" onClick={this.getQuote}>Get new Quote</button>
      </div>
    );
  }
}

export default App;
