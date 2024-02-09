import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

//getting all colum of reservtaion and associate table
export const getReservationCols=createAsyncThunk('allReservationCols',async()=>{
    const response=await axios.get("http://localhost:5000/getColReservation/columns");
    try{
        return response.data;
    }catch(error){
        return error;
    }
});

//sending selected col and getting that data
export const getReservationData=createAsyncThunk('allReservationData',async({selectedCols})=>{
    console.log(selectedCols,"from reducer")
    const response=await axios.post("http://localhost:5000/getColReservation/data",{selectedCols});
    try{
        return response.data;
    }catch(error){
        return error;
    }
});


export const reservationColumns=createSlice({
    name:'reservationCols',
    initialState:{
        cols:[],
        loading:false,
        error:null
    },
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(getReservationCols.pending,(state)=>{
            state.loading=true
        }).addCase(getReservationCols.fulfilled,(state,action)=>{
            state.loading=false
            state.cols=action.payload
        }).addCase(getReservationCols.rejected,(state,action)=>{
            state.loading=true
            state.error=action.payload
        }).addCase(getReservationData.pending,(state)=>{
            state.loading=true
        }).addCase(getReservationData.fulfilled,(state,action)=>{
            state.loading=false
            state.cols=action.payload
        }).addCase(getReservationData.rejected,(state,action)=>{
            state.loading=true
            state.error=action.payload
        })
    }
})

export default reservationColumns.reducer