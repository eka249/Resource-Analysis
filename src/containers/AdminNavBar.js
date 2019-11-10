import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import TaskList from "./TaskList";
import ChartContainer from "../components/manager/ChartContainer ";
import { BrowserRouter as Router, Link } from "react-router-dom";

class AdminNavBar extends React.Component {
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
            name="newEmp"
            active={activeItem === "newEmp"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/"
              name="logout"
              active={activeItem === "logout"}
              onClick={this.props.logOut}
            />
          </Menu.Menu>
        </Menu>
        {/* 
        <Segment>
          <img src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Segment> */}
      </div>
    );
  }
}

export default AdminNavBar;
