import { createSlice} from '@reduxjs/toolkit'
import { fetchProducts, fetchMoreProducts, clearFilter, fetchSingleProduct } from '../async-thunk-helper/asyncThunkHelper'




const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        productsData: [],
        singleProductData: {},
        isError: false,
        totalResult:0,
        contentSize: 6,
        page: 1,
        product_progress :0
    },
    // reducers :{
    // },

    extraReducers : (builder)=>{
        // fetchProducts 📌
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.product_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.product_progress = 50;
            const {success, allProductData, totalResult} = action.payload;
            state.isLoading = false;
            if(success){            
                state.productsData = allProductData;
                state.totalResult = totalResult;
                state.page = 1;
            }
            state.product_progress = 100;
        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.product_progress = 100;
            state.isError = true;
        });

        // clearFilter 📌
        builder.addCase(clearFilter.pending, (state, action)=>{
            state.product_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(clearFilter.fulfilled, (state, action)=>{
            state.product_progress = 50;
            const {success, allProductData, totalResult} = action.payload
            state.isLoading = false;
            if(success){
                state.productsData = allProductData;
                state.totalResult = totalResult;
                state.page = 1;
            }
            state.product_progress = 100;
        });
        builder.addCase(clearFilter.rejected, (state, action)=>{
            state.product_progress = 100;
            state.isError = true;
        });


        // fetchMoreProducts 📌
        builder.addCase(fetchMoreProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            const {success, allProductData} = action.payload;
            if(success){
                state.productsData = state.productsData.concat(allProductData);
                state.page = state.page + 1;
            }
        });
        builder.addCase(fetchMoreProducts.rejected, (state, action)=>{
            state.isError = true;
        });
        
        // fetchSingleProduct 📌
        builder.addCase(fetchSingleProduct.pending, (state, action)=>{
            state.product_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(fetchSingleProduct.fulfilled, (state, action)=>{
            state.product_progress = 50;
            const {success, product_data} = action.payload;
            state.isLoading = false;
            if(success){
                state.singleProductData = product_data;
            }
            state.product_progress = 100;
        });
        builder.addCase(fetchSingleProduct.rejected, (state, action)=>{
            state.product_progress = 100;
            state.isError = true;
        });
    }

})

// console.log(userSlice.actions);
export default productSlice.reducer;