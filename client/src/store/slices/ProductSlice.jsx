import { createSlice} from '@reduxjs/toolkit'
import { fetchProducts, fetchMoreProducts, clearFilter, fetchSingleProduct } from '../async-thunk-helper/asyncThunkHelper'


const productSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        productsData: [],
        singleProductData: {},
        isError: false,
        totalResult:0,
        contentSize: 6,
        page: 1
    },
    // reducers :{
    // },

    extraReducers : (builder)=>{
        // fetchProducts 📌
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            // const {isLoading, productsData, totalResult} = state;
            state.isLoading = false;
            state.productsData = action.payload.allProductData;
            state.totalResult = action.payload.totalResult;
            state.page = 1;
        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isError = true;
        });

        // clearFilter 📌
        builder.addCase(clearFilter.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(clearFilter.fulfilled, (state, action)=>{
            // const {isLoading, productsData, totalResult} = state;
            state.isLoading = false;
            state.productsData = action.payload.allProductData;
            state.totalResult = action.payload.totalResult;
            state.page = 1;
        });
        builder.addCase(clearFilter.rejected, (state, action)=>{
            state.isError = true;
        });


        // fetchMoreProducts 📌
        builder.addCase(fetchMoreProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.productsData = state.productsData.concat(action.payload.allProductData);
            state.page = state.page + 1;
        });
        builder.addCase(fetchMoreProducts.rejected, (state, action)=>{
            state.isError = true;
        });
        
        // fetchSingleProduct 📌
        builder.addCase(fetchSingleProduct.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchSingleProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.singleProductData = action.payload.product_data;
        });
        builder.addCase(fetchSingleProduct.rejected, (state, action)=>{
            state.isError = true;
        });
    }

})

// console.log(userSlice.actions);
export default productSlice.reducer;