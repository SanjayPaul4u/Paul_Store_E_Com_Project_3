import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: []
    },
    reducers:{
        addToCart (state, action){}
    }

})

export default CartSlice.reducer