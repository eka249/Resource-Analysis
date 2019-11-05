//add post new user here

//posting the user (we do not know the authorization yet-just getting a user logged into the system)
export const userPostFetch = user => {
  return dispatch => {
    console.log("started post new user from front end");
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user
      })
        .then(resp => resp.json())
        .then(json => {
          if (json.jwt) {
            localStorage.setItem("token", json.jwt);
            //instead of sending this loginUser function as props, dispatch the function to action..later to be sent to formReducer
            dispatch(loginUser(json.user));
          }
        })
    });
  };
};

//action dealing with auth
const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
});
