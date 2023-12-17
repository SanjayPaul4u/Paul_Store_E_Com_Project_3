import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



// USE CREATE ASYNC THUNK & fetchProducts CREATE
export const fetchProducts = createAsyncThunk("fetchProducts", async ({myUrl})=>{
    try {
        const response = await axios({
            method: "get",
            url: myUrl,
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