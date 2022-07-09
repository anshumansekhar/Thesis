import React from "react";
const SearchProductUI = (props) => {
    function onChangeSearch(e)
    {
        props.productSearchTermPost(e.target.value)
    }
    
    return (
        <div>
            <input type="text" placeholder="Search" name="search"  onInput={onChangeSearch}/>
        </div>
    );
}
export default SearchProductUI