import { createSlice } from "@reduxjs/toolkit";
import { addToCartApiCall } from "../async-thunk-helper/cartThunkHelper";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        isError: false,
        cartData: []
    },
    // reducers:{
    //     addToCart (state, action){}
    // }
    extraReducers: (builder)=>{
        builder.addCase(addToCartApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(addToCartApiCall.fulfilled, (state, action)=>{
            state.isLoading = false;
            // console.log(action.payload);
        });
        builder.addCase(addToCartApiCall.rejected, (state, action)=>{
            state.isError = true;
        });
    }

})

export default CartSlice.reducer