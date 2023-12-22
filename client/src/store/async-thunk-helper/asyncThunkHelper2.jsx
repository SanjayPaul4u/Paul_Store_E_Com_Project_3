import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const host = "http://localhost:7000";

export const getUserApiCall = createAsyncThunk("getUserApiCall", async()=>{
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NTEzNDJlNDQxNjEyNDA4YTIyYzQzIn0sImlhdCI6MTcwMzIyMDAzNH0.Q9dhZKZP0sRevFQVnzJNwVEny_-tedxUv2pAIeZwIEw";
        const response = await axios({
            method: "get",
            url: `${host}/api/auth/getuser/${token}`,
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log("getUserApiCall Error********");
        console.log(error);
    }
});
export const LoingApiCall = createAsyncThunk("LoingApiCall", async({loginData})=>{
    try {
        const response = await axios({
            method: "post",
            url: `${host}/api/auth/login`,
            data: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        return data;
    } catch (error) {
        console.log("LoingApiCall Error********");
        console.log(error);
    }
});
export const SignupApiCall = createAsyncThunk("SignupApiCall", async({signUpData})=>{
    try {
        const response = await axios({
            method: "post",
            url: `${host}/api/auth/createaccount`,
            data: JSON.stringify(signUpData),
            headers: {
                "Content-Type": "application/json" //important
            }  
        });

        const data = await response.data;
        return data;
    } catch (error) {
        console.log("SignupApiCall Error********");
        console.log(error);
    }
});