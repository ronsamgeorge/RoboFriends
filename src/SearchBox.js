import React from 'react';


class SearchBox extends React.Component{
    render(){

        const { searchChange} = this.props;
        return(
            <div>
                <input type ="search" onChange= {searchChange} placeholder = "Search Name"/>
            </div>
        );
    }
}

export default SearchBox;