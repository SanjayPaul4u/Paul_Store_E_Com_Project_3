import { createSlice } from "@reduxjs/toolkit";
import { addToCartApiCall, getfromCartApiCall,deleteFromCartApiCall, updateQuantityApiCall } from "../async-thunk-helper/cartThunkHelper";
import { LogOutFunc } from "../actions";



const CartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        isError: false,
        cartData: [],
        cart_progress: 0
    },
    reducers:{
        incrementQuantity (state, action){
            const pro_id = action.payload._id;
            const updateProductCart = state.cartData.map((curEle)=>{
                if(pro_id === curEle._id){
                    let incrementQuantity = curEle.quantity + 1;
                    if(incrementQuantity>curEle.max_quantity){
                        incrementQuantity = curEle.max_quantity;
                    }
                    return {
                        ...curEle,
                        quantity : incrementQuantity
    
                    }
                }else{
                    return curEle;
                }
            });

            return {
                ...state,
                cartData: updateProductCart

            }
        },
        decrementQuantity (state, action){
            const pro_id = action.payload._id;
            const updateProductCart = state.cartData.map((curEle)=>{
                if(pro_id === curEle._id){
                    let decQuantity = curEle.quantity - 1;
                    if(decQuantity <= 1 ){
                        decQuantity = 1;
                    }
                    return {
                        ...curEle,
                        quantity : decQuantity
    
                    }
                }else{
                    return curEle;
                }
            });

            return {
                ...state,
                cartData: updateProductCart

            }
        }
    },
    extraReducers: (builder)=>{
        // 📌
        builder.addCase(addToCartApiCall.pending, (state, action)=>{
            state.isLoading = true;
            state.cart_progress = 30;
        });
        builder.addCase(addToCartApiCall.fulfilled, (state, action)=>{
            state.cart_progress = 50;
            state.isLoading = false;
            state.cart_progress = 100;
            // console.log(action.payload);
        });
        builder.addCase(addToCartApiCall.rejected, (state, action)=>{
            state.isError = true;
            state.cart_progress = 100;
        });

         // 📌
        builder.addCase(getfromCartApiCall.pending, (state, action)=>{
            state.cart_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(getfromCartApiCall.fulfilled, (state, action)=>{
            state.cart_progress = 50;
            state.isLoading = false;
            const { success, cart_data } = action.payload;
            if(success){
                state.cartData =  cart_data;
            }else{
                console.log(action.payload);
            }
            state.cart_progress = 100;
        });
        builder.addCase(getfromCartApiCall.rejected, (state, action)=>{
            state.isError = true;
            state.cart_progress = 100;
        });

         // 📌
        builder.addCase(deleteFromCartApiCall.pending, (state, action)=>{
            state.cart_progress = 30;
            state.isLoading = true;
            
        });
        builder.addCase(deleteFromCartApiCall.fulfilled, (state, action)=>{
            state.cart_progress = 50;
            state.isLoading = false
            state.cart_progress = 100;
        });
        builder.addCase(deleteFromCartApiCall.rejected, (state, action)=>{
            state.cart_progress = 100;
            state.isError = true;
        });

         // 📌
        builder.addCase(updateQuantityApiCall.pending, (state, action)=>{
            // state.isLoading = true;
        });
        builder.addCase(updateQuantityApiCall.fulfilled, (state, action)=>{
            state.isLoading = false
        });
        builder.addCase(updateQuantityApiCall.rejected, (state, action)=>{
            state.isError = true;
        });

        // 📌LOG-OUT-FUNC
        builder.addCase(LogOutFunc, (state, action)=>{
            return {
                ...state,
                cartData : []
            }
        })
    }

})

export default CartSlice.reducer
export const {incrementQuantity, decrementQuantity} = CartSlice.actions;