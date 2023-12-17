import { createSlice} from '@reduxjs/toolkit'
import { fetchProducts } from '../async-thunk-helper/asyncThunkHelper'


const productSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        productsData: [],
        isError: false,
        url: "http://localhost:7000/api/products/allproduct"
    },
    // reducers :{
    //     addUser(state, action){}
    // }

    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.productsData = action.payload.allProductData;
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isError = true;
        })
    }

})

// console.log(userSlice.actions);
export default productSlice.reducer;