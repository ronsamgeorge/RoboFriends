import React from 'react';
import Card from './Card';

class CardArray extends React.Component{
    render(){

        const { robots } = this.props;
        const CardList = robots.map((user,i)=> {
            return <Card key = {robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        }) 
        
        return (
           <div>
                {CardList}
           </div> 
        );
    }
}

export default CardArray; 