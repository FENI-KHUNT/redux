import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/CounterSlice";
import studentReducer from '../Slice/studentApiSlice'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        student : studentReducer
    }
})