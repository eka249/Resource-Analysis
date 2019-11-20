import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import TaskList from "./TaskList";
import ChartContainer from "../components/manager/ChartContainer ";
import { Link } from "react-router-dom";

class UserNavBar extends React.Component {
  //   componentDidMount = () => {};
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="oldTasks"
            active={activeItem === "oldTasks"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              // <Link to="/" active={activeItem === "logout"}
              // onClick={this.props.logOut}/>

              as={Link}
              to="/login"
              name="logout"
              active={activeItem === "logout"}
              onClick={this.props.logOut}
            ></Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default UserNavBar;
