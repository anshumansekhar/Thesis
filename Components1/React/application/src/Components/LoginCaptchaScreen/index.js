import React from "react";
import ReCAPTCHA from 'react-google-recaptcha';
var username = "";
var password = "";

function userNameFunc(e) {
  username = e.target.value;
}
function passwordFunc(e) {
  password = e.target.value;
}
const LoginScreen = (props) => {
  function loginCheck() {
    props.loggedInPost(true);
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
                onInput={userNameFunc}
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
                onInput={passwordFunc}
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
          <tr>
            <td><ReCAPTCHA
              sitekey="YOUR-SITE-KEY"

            /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoginScreen;
