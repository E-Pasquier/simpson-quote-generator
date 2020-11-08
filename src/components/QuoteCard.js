import React from 'react';
import './QuoteCard.css';

function QuoteCard ({character}) {
    return (
        <figure className="QuoteCard">
            <img src={character.image} alt={character.character}/> 
            <figcaption>
                <blockquote>{character.quote}</blockquote>
                <cite>{character.character}</cite>
            </figcaption>
        </figure>
    )
}

export default QuoteCard;