import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const host = "http://localhost:7000";
let filter = '';

// fetchProducts📌 CREATE USEING CREATE ASYNC THUNK
export const fetchProducts = createAsyncThunk("fetchProducts", async ({page, contentSize, search, sort, category, price, company, weight, color})=>{
    try {
        // search? filter = filter+`&search=${search}`:filter = filter;
        filter = `${search && `&search=${search}`}${sort && `&sort=${sort}`}${category && `&category=${category}`}${price && `&price=${price}`}${company && `&company=${company}`}${weight && `&weight=${weight}`}${color && `&color=${color}`}`

            
        
        const response = await axios({
            method: "get",
            url: `${host}/api/products/allproduct?contentSize=${contentSize}&page=1${filter}`,
            headers: {
                "Content-Type": "application/json" //important
            }    
        })
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})


// fetchMoreProducts📌 CREATE for infinite scrolling
export const fetchMoreProducts = createAsyncThunk("fetchMoreProducts", async ({contentSize, page})=>{
    try {
        
        const response = await axios({
            method: "get",
            url:`${host}/api/products/allproduct?contentSize=${contentSize}&page=${page+1}${filter}`,
            headers: {
                "Content-Type": "application/json" //important
            }
        })
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})


// CLEAR FILTER 📌
export const clearFilter = createAsyncThunk("clearFilter", async ({contentSize, page})=>{
    try {
        filter = ''
        const response = await axios({
            method: "get",
            url: `${host}/api/products/allproduct?contentSize=${contentSize}&page=1`,
            headers: {
                "Content-Type": "application/json" //important
            }    
        });
        const data = await response.data;
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})


// Fetch Single Product📌
export const fetchSingleProduct = createAsyncThunk("fetchSingleProduct",async({id})=>{
    try {
        const response = await axios({
            method: "get",
            url: `${host}/api/products/allproduct/${id}`,
            headers: {
                "Content-Type": "application/json" //important
            }
        });
        const data = await response.data;
        // console.log(data);
        return data;

    } catch (error) {
        console.log(error);
        return error.response.data;
    }
})