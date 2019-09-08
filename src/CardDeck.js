import React, { Component } from 'react';
import Card from './Card';
import './CardDeck.css';

class CardDeck extends Component {
    render(){
        let title;
        if(this.props.isWinner) {
            title = <h1 className='CardDeck-winner'> Winning Hand! </h1>
        } else {
            title = <h1 className='CardDeck-loser'> Losing Hand! </h1>
        }
        return(
            <div className='CardDeck'>
                {title}
                <h4 className='CardDeck-exp'> Total Experience: {this.props.exp} </h4>
                <div className='CardDeck-cards'>
                    {this.props.pokemon.map(pokem => (
                        <Card 
                            id={pokem.id} 
                            name={pokem.name} 
                            type={pokem.type} 
                            exp={pokem.base_experience}
                            key={pokem.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CardDeck;
