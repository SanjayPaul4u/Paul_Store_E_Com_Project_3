import { createSlice} from '@reduxjs/toolkit'
import { fetchProducts, fetchMoreProducts, clearFilter } from '../async-thunk-helper/asyncThunkHelper'


const productSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        productsData: [],
        isError: false,
        totalResult:0,
        contentSize: 2,
        page: 1
    },
    // reducers :{
    // },

    extraReducers : (builder)=>{
        // fetchProducts 📌
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            // const {isLoading, productsData, totalResult} = state;
            state.isLoading = false;
            state.productsData = action.payload.allProductData;
            state.totalResult = action.payload.totalResult;
            state.page = 1;
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isError = true;
        })

        // clearFilter 📌
        builder.addCase(clearFilter.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(clearFilter.fulfilled, (state, action)=>{
            // const {isLoading, productsData, totalResult} = state;
            state.isLoading = false;
            state.productsData = action.payload.allProductData;
            state.totalResult = action.payload.totalResult;
            state.page = 1;
        })
        builder.addCase(clearFilter.rejected, (state, action)=>{
            state.isError = true;
        })


        // fetchMoreProducts 📌
        builder.addCase(fetchMoreProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.productsData = state.productsData.concat(action.payload.allProductData);
            state.page = state.page + 1;
        })
        builder.addCase(fetchMoreProducts.rejected, (state, action)=>{
            state.isError = true;
        })
        
    }

})

// console.log(userSlice.actions);
export default productSlice.reducer;