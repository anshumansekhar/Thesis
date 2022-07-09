import React from "react";
const Register = (props) => {
    var email;
    var password;
    function onEmailInput(e)
    {
        email=e.target.value;
    }
    function onPasswordInput(e)
    {
        password=e.target.value;
    }
    function register()
    {
        console.log("User Resgisterd");
        props.userRegisteredPost(true);
    }
return(
<div>
    <label>email:</label>
    <input type="email" name="email" onInput={onEmailInput}/><br></br>
    <label>Password:</label>
    <input type="password" name="password" /><br></br>
    <label>Confirm Password:</label>
    <input type="password" name="password" onInput={onPasswordInput}/><br></br>
    <button onClick={register}>Register</button>
</div>
);
}
export  default Register;