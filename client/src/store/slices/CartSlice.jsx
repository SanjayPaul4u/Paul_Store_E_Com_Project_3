import { createSlice } from "@reduxjs/toolkit";
import { addToCartApiCall, getfromCartApiCall,deleteFromCartApiCall } from "../async-thunk-helper/cartThunkHelper";


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
        // 📌
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

         // 📌
        builder.addCase(getfromCartApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getfromCartApiCall.fulfilled, (state, action)=>{
            state.isLoading = false;
            const { success, cart_data } = action.payload;
            if(success){
                state.cartData =  cart_data;
            }else{
                console.log(action.payload);
            }
        });
        builder.addCase(getfromCartApiCall.rejected, (state, action)=>{
            state.isError = true;
        });

         // 📌
        builder.addCase(deleteFromCartApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(deleteFromCartApiCall.fulfilled, (state, action)=>{
            state.isLoading = false
        });
        builder.addCase(deleteFromCartApiCall.rejected, (state, action)=>{
            state.isError = true;
        });
    }

})

export default CartSlice.reducer