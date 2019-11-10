//TEMPLATE FOR LATER
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
  withRouter
} from "react-router-dom";

class AdminHome extends React.Component {
  render() {
    console.log("renered admin pgge");
    return <div>admin home</div>;
  }

  /* <AddNewUser user={this.user} />; */
}
export default withRouter(AdminHome);

// <Modal.Content>
//           <Header content="Or Sign Up!" as="h3"></Header>

//           <Form.Input
//             label="Your Name"
//             // required
//             type="text"
//             placeholder="User"
//             name="newName"
//             id="newName"
//             // value={this.state.newUser.newName}
//             onChange={this.handleChange}
//           />
//           <Form.Input
//             label=" New username "
//             // required
//             type="text"
//             placeholder="Username"
//             name="newUsername"
//             id="newUsername"
//             // value={this.state.newUser.newUsername}
//             onChange={this.handleChange}
//           />
//           <Form.Input
//             label=" New password "
//             // required
//             type="password"
//             placeholder="Password"
//             name="newPassword"
//             id="newPassword"
//             // value={this.state.newUser.newPassword}
//             onChange={this.handleChange}
//           />
//         </Modal.Content>
//         <Modal.Actions>
//           <Button
//             // type="submit"
//             onClick={this.handleSignUp}
//             color="green"
//             icon="pencil"
//             content="Sign Up!"
//           />
//         </Modal.Actions>
