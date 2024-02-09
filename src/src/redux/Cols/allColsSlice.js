import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const allCols=createAsyncThunk('allColumns',async()=>{
    const response=await axios.get("http://127.0.0.1:5000/allCols/columns");
    try{
        return response.data;
    }catch(error){
        return error;
    }
});

export const Cols=createSlice({
    name:'columns',
    initialState:{
        columns:[],
        loading:false,
        error:null
    },
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(allCols.pending,(state)=>{
            state.loading=true
        }).addCase(allCols.fulfilled,(state,action)=>{
            state.loading=false
            state.columns=action.payload
        }).addCase(allCols.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})

export default Cols.reducer