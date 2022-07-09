import React from "react";
const ProductCategory = (props) => {
    function onProductCategoryChange(e)
    {
        console.log(e.target.value);
        props.productCategorySelectedPost(e.target.value);
    }
    return (
        <div>
            Product Category:
            <select onChange={onProductCategoryChange}>
                <option value="Shoes">Shoes</option>
                <option value="Shirts">Shirts</option>
                <option value="T Shirts">T Shirts</option>
                <option value="Jeans">Jeans</option>
            </select>
        </div>
    );
}
export default ProductCategory;