import React from "react";
const AuthorAndGenre = (props) => {
    var genre;
    var author;
    function ongenre(e) {
        genre = e.target.value;
    }
    function onauthor(e) {
        author = e.target.value;
    }
    return (
        <div>
            <select name="genreDropdown" onChange={ongenre}>
                <option value=''>Select a genre</option>
                <option value="Fiction">Fiction</option>
            </select>
            <select name="authorDropdown" onChange={onauthor}>
                <option value=''>Select a Author</option>
                <option value="J K Rowling">J K Rowling</option>
            </select>
        </div>);
}
export default AuthorAndGenre