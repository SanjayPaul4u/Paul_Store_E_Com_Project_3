import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import GetCookie from '../../hooks/getCookie';


const host = "http://localhost:7000";
// addToCartApiCall
export const addToCartApiCall = createAsyncThunk("addToCartApiCall", async({cartData})=>{
    try {
        const token = GetCookie("paul-store-token");
        const response = await axios({
            method: "post",
            url: `${host}/api/cart/addtocart/${token}`,
            data: cartData,
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        return data;
    } catch (error) {
        console.log("addToCartApiCall ERROR********");
        console.log(error);
        return error.response.data;
    }
}); 

// getfromCartApiCall
export const getfromCartApiCall = createAsyncThunk("getfromCartApiCall", async()=>{
    try {
        const token = GetCookie("paul-store-token");
        const response = await axios({
            method: "get",
            url: `${host}/api/cart/getfromcart/${token}`,
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        return data;
    } catch (error) {
        console.log("addToCartApiCall ERROR********");
        console.log(error);
        return error.response.data;
    }
}); 