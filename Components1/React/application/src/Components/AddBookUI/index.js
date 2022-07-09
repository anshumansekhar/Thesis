import React from "react";
const AddBookUI = (props) => {
    var bookName=""
    var authorName=""
    var year=""
    function onNameChange(e){
        bookName=e.target.value
    }
    function onAuthorChange(e){
        authorName=e.target.value
    }
    function onYearChange(e){
        year=e.target.value
    }
    function addBook(){
        props.newBookPost({"bookName":bookName,"authorName":authorName,"year":year,"rentingCost":100})
    }
    return (
        <table>
            <tr>
                <td>
                    <label>Book Name:</label>
                </td>
                <td>
                    <input type="text" onInput={onNameChange}/>
                </td>
            </tr>
            <tr>
                <td>
                    <label>Author Name:</label>
                </td>
                <td>
                    <input type="text" onInput={onAuthorChange}/>
                </td>
            </tr>
            <tr>
                <td>
                    <label>Year:</label>
                </td>
                <td>
                    <input type="text" onInput={onYearChange}/>
                </td>
            </tr>
            <tr>
                <td><button onClick={addBook}>Add Book</button></td>
            </tr>
        </table>


    )
}
export default AddBookUI;