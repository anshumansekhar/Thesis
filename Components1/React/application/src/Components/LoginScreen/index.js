import React from "react";

const LoginScreen = (props) => {
  var username = "";
  var password = "";
  function getNameValue(e) {
    username = e.target.value;
  }
  function getPasswordValue(e) {
    password = e.target.value;
  }
  function loginCheck() {
    props.loggedInPost(true)
  }
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th colspan="2">Login</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label for="namefield">Name</label>
            </td>
            <td>
              <input
                type="text"
                name="namefield"
                onChange={getNameValue}
                placeholder="Enter your name"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="pwdfield">Password</label>
            </td>
            <td>
              <input
                type="password"
                name="pwdfield"
                onChange={getPasswordValue}
                placeholder="Enter password"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={loginCheck}>Login</button>
            </td>
            <td>
              <a href="#">Forgot Password</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoginScreen;
