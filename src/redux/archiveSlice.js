
import { createSlice } from "@reduxjs/toolkit";

export const archiveSlice = createSlice({
    name: "archive",
    initialState:[],
    reducers:{
        getArchive :  (state, action)=>{
            return localStorage.tasks ? JSON.parse(localStorage.archive): state
           
        },
        addArchive: (state, action)=>{
            const newState = {...action.payload , archiveAt : new Date()}
            state.push(newState);
            localStorage.setItem('archive' , JSON.stringify(state))
        },
    }
});

export const {getArchive, addArchive } = archiveSlice.actions;

export default archiveSlice.reducer