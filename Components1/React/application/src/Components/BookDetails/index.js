import React from "react";
const BookDetails = (props) => {
    var amount=0
    function calculateGST()
    {
        amount=props.bookPre.rentingCost+0.18*props.bookPre.rentingCost;
    }
    function proceed()
    {
        props.amountPost(amount)
    }
    calculateGST()
return(
    <div>
        <table>
            <tr>
                <td>
                    <label>Book Name:</label>
                </td>
                <td>
                    {props.bookPre.bookName}
                </td>
            </tr>
            <tr>
                <td>
                    <label>Author Name:</label>
                </td>
                <td>
                    {props.bookPre.authorName}
                </td>
            </tr>
            <tr>
                <td>
                    <label>Year:</label>
                </td>
                <td>
                    {props.bookPre.bookYear}
                </td>
            </tr>
            <tr>
                <td>Renting Cost:{props.bookPre.rentingCost}</td>
            </tr>
            <tr>
                <td>With 18% GST:{amount}</td>
            </tr>
            <tr>
                <td><button onClick={proceed}>Proceed</button></td>
            </tr>
        </table>


    </div>
)}
export default BookDetails