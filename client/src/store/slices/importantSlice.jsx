import { createSlice } from '@reduxjs/toolkit'
import { LoingApiCall, SignupApiCall, getUserApiCall } from '../async-thunk-helper/asyncThunkHelper2';



const importantSlice = createSlice({
    name: "user",
    initialState: {
        gridView : true,
        isLoading : false,
        isError: false,
        user: []
    },
    reducers :{
        girdViewFunc(state, action){
            state.gridView = true;
        },
        listViewFunc(state, action){
            state.gridView = false;
        }
    },
    extraReducers: (builder) =>{
        //LoingApiCall 📌
        builder.addCase(getUserApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getUserApiCall.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.user_data;

        });
        builder.addCase(getUserApiCall.rejected, (state, action)=>{
            state.isError  = true;
        });
        
        //LoingApiCall 📌
        builder.addCase(LoingApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(LoingApiCall.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.user_data;

        });
        builder.addCase(LoingApiCall.rejected, (state, action)=>{
            state.isError  = true;
        });

        // SignupApiCall 📌
        builder.addCase(SignupApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(SignupApiCall.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.saved_data;

        });
        builder.addCase(SignupApiCall.rejected, (state, action)=>{
            state.isError  = true;
        });
    }

})

export default importantSlice.reducer;
export const {girdViewFunc, listViewFunc}  = importantSlice.actions;