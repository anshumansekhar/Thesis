import React from "react";
const Register2 = (props) => {
    var email;
    var password;
    var name;
    var username;
    var address;
    var phoneNumber;
    function onEmailInput(e) {
        email = e.target.value;
    }
    function onNameInput(e) {
        name = e.target.value;
    }
    function onUserNameInput(e) {
        username = e.target.value;
    }
    function onPasswordInput(e) {
        password = e.target.value;
    }
    function onAddressInput(e) {
        address = e.target.value;
    }
    function onPhoneNumberInput(e) {
        phoneNumber = e.target.value;
    }
    function register() {
        console.log("User Resgisterd");
        props.userRegisteredPost(true);
    }
    return (
        <div>
            <table>
                <tr>
                    <td><label>Name:</label></td>
                    <td><input type="text" name="name" onInput={onNameInput} /></td>
                </tr>
                <tr>
                    <td><label>username:</label></td>
                    <td><input type="text" name="name" onInput={onUserNameInput} /></td>
                </tr>
                <tr>
                    <td><label>email:</label></td>
                    <td><input type="email" name="email" onInput={onEmailInput} /></td>
                </tr>
                <tr>
                    <td><label>Address:</label></td>
                    <td><input type="text" name="name" onInput={onAddressInput} /></td>
                </tr>
                <tr>
                    <td><label>Phone Number:</label></td>
                    <td><input type="text" name="name" onInput={onPhoneNumberInput} /></td>
                </tr>
                <tr>
                    <td> <label>Password:</label></td>
                    <td><input type="password" name="password" /></td>
                </tr>
                <tr>
                    <td> <label>Confirm Password:</label></td>
                    <td><input type="password" name="password" onInput={onPasswordInput} /></td>
                </tr>
                <tr><td><button onClick={register}>Register</button></td></tr>
        </table>
        </div >
    );
}
export default Register2;