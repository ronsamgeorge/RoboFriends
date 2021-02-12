import React from 'react';

class Scroll extends React.Component{
    render(){
        const ren = this.props.children;
        return (
            <div style={{overflowY:'scroll' , border:'5px solid', height:"800px"}}>
                {ren}
            </div>
        );
    }

}

export default Scroll;