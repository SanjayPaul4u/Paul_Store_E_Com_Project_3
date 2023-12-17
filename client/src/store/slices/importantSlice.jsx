import { createSlice } from '@reduxjs/toolkit'


const importantSlice = createSlice({
    name: "user",
    initialState: {
        gridView : true
    },
    reducers :{
        girdViewFunc(state, action){
            state.gridView = true;
        },
        listViewFunc(state, action){
            state.gridView = false;
        }
    }

})

export default importantSlice.reducer;
export const {girdViewFunc, listViewFunc}  = importantSlice.actions;