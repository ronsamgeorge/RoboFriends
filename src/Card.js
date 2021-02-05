import React from 'react';
import './Card.css';
import 'tachyons';

class Card extends React.Component{
    render(){
        return(
            <div className = " tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
                <div>
                    <img alt ="robots" src ={`https://robohash.org/${this.props.id}?200x200`}/>
                </div>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;