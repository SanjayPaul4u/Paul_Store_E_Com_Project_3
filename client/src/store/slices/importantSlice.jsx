import { createSlice } from '@reduxjs/toolkit'
import { LoingApiCall, SignupApiCall, getUserApiCall } from '../async-thunk-helper/asyncThunkHelper2';



const importantSlice = createSlice({
    name: "user",
    initialState: {
        gridView : true,
        isLoading : false,
        isError: false,
        user: [],
        Alert: null,
    },
    reducers :{
        girdViewFunc(state, action){
            state.gridView = true;
        },
        listViewFunc(state, action){
            state.gridView = false;
        },
        setAlertFunc(state, action){
            state.Alert = action.payload;
        },
        removeAlertFunc(state, action){
            state.Alert = null;
        },
        logOutFunc(state, action){
            state.user = [];
        }
    },
    extraReducers: (builder) =>{
        //getUserApiCall 📌
        builder.addCase(getUserApiCall.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getUserApiCall.fulfilled, (state, action)=>{
            state.isLoading = false;
            const {success, user_data} = action.payload;
            if(success){
                state.user = user_data;
            }else{
                // console.log(action.payload);
            }

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
            const {success, user_data } = action.payload;
            if(success){
                state.user = user_data;
            }else{
                // console.log(action.payload);
            }
            
            return state;
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
            const {success, saved_data}= action.payload;
            if(success){
                state.user = saved_data;
            }else{
                console.log(action.payload);
            }
            return state;
        });
        builder.addCase(SignupApiCall.rejected, (state, action)=>{
            state.isError  = true;
        });
    }

})

export default importantSlice.reducer;
export const {girdViewFunc, listViewFunc, setAlertFunc, removeAlertFunc, logOutFunc }  = importantSlice.actions;