import React, { Component, useState } from 'react';
import './App.css';

import LoginScreen from './Components/LoginScreen'
import LoginScreen1 from './Components/LoginScreen1';
import Register1 from './Components/Register1';
import ProductCategory from './Components/ProductCategory';
import SearchProductUI from './Components/SearchProductUI';
import SearchProduct from './Components/SearchProduct';
import NumberOfItem from './Components/NumberOfItems';
import ProductFareCalculator from './Components/ProductFareCalculator';
import GSTCalculator from './Components/GSTCalculator';
import PaymentPageUI1 from './Components/PaymentPageUI1';
import Logout from './Components/Logout';
import ProductList from './Components/ProductList';
import Register from './Components/Register1';
import YoutubeVideoPlay from './Components/YoutubeVideoPlay';
import VideoList from './Components/VideoList';






function App() {
    const [userRegistered, setuserRegistered] = useState(null);
    const [loggedIn, setloggedIn] = useState(null);
    const [productCategorySelected, setproductCategorySelected] = useState(null);
    const [productSearchedList, setproductSearchedList] = useState(null);
    const [productSearchTerm, setproductSearchTerm] = useState(null);
    const [amount, setamount] = useState(null);
    const [selectedProduct, setselectedProduct] = useState(null);
    const [paymentStatus, setpaymentStatus] = useState(false);
    const [numberOfItems, setnumberOfItems] = useState(null);
    const [videoId,setvideoId]=useState(null);
    return (
        
        <div className='parent'>
            <Register userRegisteredPost={setuserRegistered}/>
            <LoginScreen loggedInPost={setloggedIn}/>
            {loggedIn && <VideoList videoIdPost={setvideoId}/>}
            {loggedIn && videoId && <YoutubeVideoPlay videoIdPre={videoId}/>}
        </div>)
}
export default App;