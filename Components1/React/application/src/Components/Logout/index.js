import React from "react";
const Logout = (props) => {
    function logout(e)
    {
        console.log("logout");
        props.loggedInPost(false);
    }
return(
    <button onClick={logout}>Logout</button>
)
}
export default Logout;