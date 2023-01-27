import React from "react";
import Cardlist from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./app.css";
import Scroll from "../components/Scroll";
import ErrorHandle from "../components/ErrorHandle";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  onSeachChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robot) => this.setState({ robots: robot }));
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading....</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RobotFriends</h1>
        <Searchbox searchChange={this.onSeachChange} />
        <Scroll>
          <ErrorHandle>
            <Cardlist robots={filteredRobots} />
          </ErrorHandle>
        </Scroll>
      </div>
    );
  }
}
export default App;
