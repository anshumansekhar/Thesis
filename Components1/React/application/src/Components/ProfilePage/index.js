import React from "react";
const ProfilePage = (props) => {
    var email;
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
    function onAddressInput(e) {
        address = e.target.value;
    }
    function onPhoneNumberInput(e) {
        phoneNumber = e.target.value;
    }
    return (
        <div>
            <table>
                <tr>
                    <td><label>Name:</label></td>
                    <td>props.namePre</td>
                </tr>
                <tr>
                    <td><label>username:</label></td>
                    <td>props.usernamePre</td>
                </tr>
                <tr>
                    <td><label>email:</label></td>
                    <td>props.emailPre</td>
                </tr>
                <tr>
                    <td><label>Address:</label></td>
                    <td>props.addressPre</td>
                </tr>
                <tr>
                    <td><label>Phone Number:</label></td>
                    <td>props.phoneNumberPre</td>
                </tr>
            </table>
        </div >
    );
}
export default ProfilePage;