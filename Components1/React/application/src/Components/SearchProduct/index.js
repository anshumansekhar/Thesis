import React from "react";
const SearchProduct = (props) => {
    function search()
    {
        
        const productCategory=props.productCategorySelectedPre;
        const searchedProductList=[];
        const productList=[
            {"ProductName":"John Player Jeans","ProductCategory":"Jeans","Size":"M","Price":1000}
        ];
        for (let i = 0; i < productList.length; i++) {
            if(productList[i].ProductName.includes(props.productSearchTermPre) && productCategory.includes(productList[i].ProductCategory))
            {
                searchedProductList.push(productList[i]);
            }
        }
        
        props.productSearchedListPost(searchedProductList)
    }

    return (<div> 
        <button onClick={search}>Search Products</button>
    </div>);
}
export default SearchProduct
