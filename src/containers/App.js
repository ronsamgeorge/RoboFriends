import React from "react";
import { robots } from "../components/robots.js";
import CardArray from "../components/CardComponent";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll.js"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json( ))
    .then(users => {this.setState({robots : users})})
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    //console.log(filteredRobots);
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (robots.length === 0){
      return <h1>Loading</h1>
    }else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardArray robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
