import React from "react";
const ProductList = (props) => {

    var product;
    function onClickSelect(e) {
        props.selectedProductPost(product);
        console.log("fa"+product.Price)
        props.amountPost(product.Price);
    }
    function onProductSelect(e) {
        console.log(e.ProductName);
        product = e;
    }
    return (
        <div>
            <table border="1">
                <thead>
                    <th>Select </th>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Product Category
                    </th>
                    <th>
                        Size
                    </th>
                    <th>
                        Price
                    </th>
                </thead>
                <tbody>

                    {

                        props.productSearchedListPre.map((e) => (
                            <tr key={e.ProductName}>
                                <td><input type="radio" name="productRadio" value={e} onInput={onProductSelect(e)} /></td>
                                <td>{e.ProductName}</td>
                                <td>{e.ProductCategory}</td>
                                <td>{e.Size}</td>
                                <td>{e.Price}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <br></br>
            <button onClick={onClickSelect}>Select Product</button>
        </div>


    );
};

export default ProductList;