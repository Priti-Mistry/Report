import {configureStore} from '@reduxjs/toolkit'
import columnReducer from '../redux/Cols/allColsSlice'
import reservationReducer from '../redux/reservation/reservationSlice'
export const store=configureStore({
    reducer:{
        columns:columnReducer,
        reservation:reservationReducer
    }
})