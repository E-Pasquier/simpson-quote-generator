import React from 'react';
import axios from 'axios';

import './QuoteCard.css';

// function QuoteCard({character, image, quote}) {
  
//     return (
//       <figure className="QuoteCard">
//         <img src={image} alt={character} />
//         <figcaption>
//           <blockquote>{quote}</blockquote>
//           <p>
//             <cite>{character}</cite>
//           </p>
//         </figcaption>
//       </figure>
//     );
//   };

class QuoteCard extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      character: 
      'Homer Simpson',
      image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
      characterDirection: 
      "Right"
    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then((response)=>response.data)
    .then((data)=>{
      this.setState({
        quote : data[0],
        character : data[1],
        image : data[2],
        characterDirection: data[3]
      });
    })
  }

  render(){
  return (
    <figure className="QuoteCard">
         <img src={this.state.image} alt={this.state.character} />
         <figcaption>
           <blockquote>{this.state.quote}</blockquote>
           <p>
             <cite>{this.state.character}</cite>
           </p>
         </figcaption>
         <button type="button" onClick={this.getQuote}>Get new Quote !</button>
       </figure>
  );
}}

export default QuoteCard;

// class QuoteCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favorite: false,
//     };
//   }
//   render() {
//     return (
//       <figure className="QuoteCard">
//         <img src={this.props.image} alt={this.props.character} />
//         <figcaption>
//           <blockquote>{this.props.quote}</blockquote>
//           <p>
//             <cite>{this.props.character}</cite>
//             <span
//               className={this.state.favorite ? 'is-favorite' : ''}
//               onClick={(event) => {
//                 const newFavorite = !this.state.favorite;
//                 this.setState({ favorite: newFavorite });
//               }}
//             >
//               &#9733;
//             </span>
//           </p>
//         </figcaption>
//       </figure>
//     );
//   }
// }

// export default QuoteCard;
