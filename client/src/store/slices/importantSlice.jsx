import { createSlice } from '@reduxjs/toolkit'
import { LoingApiCall, SignupApiCall, getUserApiCall } from '../async-thunk-helper/asyncThunkHelper2';
import { LogOutFunc } from '../actions';





const importantSlice = createSlice({
    name: "user",
    initialState: {
        gridView : false,
        isLoading : false,
        isError: false,
        user: [],
        Alert: null,
        important_progress: 0
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
        }
    },
    extraReducers: (builder) =>{
        //getUserApiCall 📌
        builder.addCase(getUserApiCall.pending, (state, action)=>{
            state.important_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(getUserApiCall.fulfilled, (state, action)=>{
            state.important_progress = 50;
            state.isLoading = false;
            const {success, user_data} = action.payload;
            if(success){
                state.user = user_data;
            }else{
                // console.log(action.payload);
            }
            state.important_progress = 100;
        });
        builder.addCase(getUserApiCall.rejected, (state, action)=>{
            state.important_progress = 100;
            state.isError  = true;
        });
        
        //LoingApiCall 📌
        builder.addCase(LoingApiCall.pending, (state, action)=>{
            state.important_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(LoingApiCall.fulfilled, (state, action)=>{
            state.important_progress = 50;
            state.isLoading = false;
            const {success, user_data } = action.payload;
            if(success){
                state.user = user_data;
            }else{
                // console.log(action.payload);
            }
            
            state.important_progress = 100;
            return state;
        });
        builder.addCase(LoingApiCall.rejected, (state, action)=>{
            state.important_progress = 100;
            state.isError  = true;
        });

        // SignupApiCall 📌
        builder.addCase(SignupApiCall.pending, (state, action)=>{
            state.important_progress = 30;
            state.isLoading = true;
        });
        builder.addCase(SignupApiCall.fulfilled, (state, action)=>{
            state.important_progress = 50;
            state.isLoading = false;
            const {success, saved_data}= action.payload;
            if(success){
                state.user = saved_data;
            }else{
                console.log(action.payload);
            }

            state.important_progress = 100;
            return state;
        });
        builder.addCase(SignupApiCall.rejected, (state, action)=>{
            state.important_progress = 100;
            state.isError  = true;
        });
        // LogOutFunc 📌
        builder.addCase(LogOutFunc, (state, action)=>{
            return {
                ...state,
                user : []
            }
        })
    }

})

export default importantSlice.reducer;
export const {girdViewFunc, listViewFunc, setAlertFunc, removeAlertFunc, logOutFunc, setLoadingProgress }  = importantSlice.actions;