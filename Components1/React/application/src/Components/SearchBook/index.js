import React from "react";
const SearchBook = (props) => {
    var searchTerm=""
    function onChangeSearch(e)
    {
        searchTerm=e.target.value;
    }
    function search()
    {
        const bookList=props.bookListPre;
        const searchedList=[];
        for (let i = 0; i < bookList.length; i++) {
            if(bookList[i].bookName.includes(searchTerm))
            {
                searchedList.concat(bookList[i])
            }
        }
        props.bookSearchedListPost(searchedList)
    }
    return (
        <div>
            <input type="text" placeholder="Search" name="search"  onInput={onChangeSearch}/>
            <button onInput={search}>Search</button>
        </div>
    );
}
export default SearchBook