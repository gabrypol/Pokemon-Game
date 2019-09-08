import React, {Component} from 'react';
import './Card.css';

const IMG_LINK = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Card extends Component {
    render(){
        let imgSrc = `${IMG_LINK}${(this.props.id + '').padStart(3, '0')}.png`;
        return(
            <div className='Card'>
                <h1 className='Card-title'> {this.props.name} </h1>
                <div className='Card-image'>
                    <img src={imgSrc} alt={this.props.name}/> 
                </div>
                <div className='Card-data'> Type: {this.props.type} </div>
                <div className='Card-data'> Experience: {this.props.exp} </div>
            </div>
        )
    }
}

export default Card;

