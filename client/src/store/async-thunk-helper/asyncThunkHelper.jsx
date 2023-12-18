import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const host = "http://localhost:7000";

// USE CREATE ASYNC THUNK & fetchProducts CREATE
export const fetchProducts = createAsyncThunk("fetchProducts", async ({contentSize, page})=>{
    try {
        
        const response = await axios({
            method: "get",
            url: `${host}/api/products/allproduct?contentSize=${contentSize}&page=1`,
            headers: {
                "Content-Type": "application/json" //important
            }
        })
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
})
// fetchMoreProducts CREATE for infinite scrolling
export const fetchMoreProducts = createAsyncThunk("fetchMoreProducts", async ({contentSize, page})=>{
    try {
        const response = await axios({
            method: "get",
            url:`${host}/api/products/allproduct?contentSize=${contentSize}&page=${page+1}`,
            headers: {
                "Content-Type": "application/json" //important
            }
        })
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
})

