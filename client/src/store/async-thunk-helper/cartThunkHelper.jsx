import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import GetCookie from '../../hooks/getCookie';


const host = import.meta.env.VITE_APP_SERVER;
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

// Delete Product from User Cart
export const deleteFromCartApiCall = createAsyncThunk("deleteFromCartApiCall", async({id})=>{
    try {
        const token = GetCookie("paul-store-token");
        const response = await axios({
            method: "delete",
            url: `${host}/api/cart/deletefromcart/${id}/${token}`,
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        return data;
    } catch (error) {
        console.log("deleteFromCartApiCall ERROR********");
        console.log(error);
        return error.response.data;
    }
}); 

// update product quantity by id api call
export const updateQuantityApiCall = createAsyncThunk("updateQuantityApiCall", async({_id, quantity})=>{
    try {
        const token = GetCookie("paul-store-token");
        const response = await axios({
            method: "patch",
            url: `${host}/api/cart/updatequantity/${_id}/${token}`,
            data: {quantity: quantity},
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        return data;
    } catch (error) {
        console.log("updateQuantityApiCall ERROR********");
        console.log(error);
        return error.response.data;
    }
}); 