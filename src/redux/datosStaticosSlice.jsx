import { createSlice } from "@reduxjs/toolkit";
import { fetchDatosEsta } from "../api/apiData";

const initialState= {
    records:[],
    status:"idle",
    error:null
    }



export const datosStaticosSlice = createSlice({
    name:'datosStaticos',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count += 1;
        }
        ,
        decrement:(state)=>{
            state.count  -=1;
        },
    },extraReducers(builder){
        builder
            .addCase(fetchDatosEsta.pending,(state,action)=>{
                //console.log(state.status)
                state.status="loading"
            })
            .addCase(fetchDatosEsta.fulfilled,(state,action)=>{
               // console.log("cargo termino")
                state.status="succed"
                state.records=action.payload;
            })
            .addCase(fetchDatosEsta.rejected,(state,action)=>{
               // console.log("error")
                state.status="fail";
                state.error=action.error.message
            })
    }
})
export const selectAllDatosESta=(state) =>state.datosEs.records;
    export const getDatosEStaStatus=(state) =>state.datosEs.status;
    export const getDatosEStaError=(state) =>state.datosEs.error;

export const {decrement,increment} = datosStaticosSlice.actions;

export default datosStaticosSlice.reducer;