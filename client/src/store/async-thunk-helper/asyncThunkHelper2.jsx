import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import SetCookie from '../../hooks/setCookie';
import GetCookie from '../../hooks/getCookie';

const host = "http://localhost:7000";


export const getUserApiCall = createAsyncThunk("getUserApiCall", async()=>{
    try {
        const token = GetCookie("paul-store-token");
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
        SetCookie("paul-store-token", data.token);
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
        SetCookie("paul-store-token", data.token);
        return data;
    } catch (error) {
        console.log("SignupApiCall Error********");
        console.log(error);
    }
});