//sort out which version is correct

// import React, { Component } from "react";
// import { List } from "semantic-ui-react";

// class UserList extends Component {
//   componentDidMount() {
//     this.getManager();
//     this.state = {
//       manager: ""
//     };
//   }
//   getManager = () => {
//     const manager = this.props.allEmps.filter(
//       managers => this.props.emp.unit == "Mod5"
//       // managers.unit
//     );
//     console.log("manager logic", manager);
//     this.setState({
//       manager: manager
//     });
//     //make sure that manager definition is correct; does it need to be this.state.emp.manager?
//     // return manager;
//   };

//   render() {
//     return (
//       //add dropdown where you can type here
//       //https://react.semantic-ui.com/modules/dropdown/#types-search-selection
//       <List celled>
//         <List.Item>
//           <List.Content>
//             <List.Header>
//               {`${this.props.emp.first_name} ${this.props.emp.last_name}`}
//             </List.Header>
//             <List.Description>Unit: {this.props.emp.unit}</List.Description>
//             {/* <List.Description>Manager: {this.state.manager}</List.Description> */}
//             {/* <Proxy button></Proxy> */}
//           </List.Content>
//         </List.Item>{" "}
//       </List>
//     );
//   }
// }
// export default UserList;
