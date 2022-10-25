import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "../api/apiData";

const initialState={
    records:[],
    status:'idle',
    error:null
}


    export const videoSlice = createSlice({
        name:'video',
        initialState,
        reducers:{
            selectTres:(state)=>
                {
                    console.log(state.video)
                    return state
                }
            ,
            prub:(state)=>{
                return state;
            },
        },extraReducers(builder){
            builder
                .addCase(fetchVideos.pending,(state,action)=>{
                   // console.log("inicia carga")
                    state.status="loading"
                })
                .addCase(fetchVideos.fulfilled,(state,action)=>{
                   // console.log("cargo termino")
                    state.status="succed"
                    state.records=action.payload;
                })
                .addCase(fetchVideos.rejected,(state,action)=>{
                   // console.log("error")
                    state.status="fail";
                    state.error=action.error.message
                })
        }
    })
    export const selectAllVideos=(state) =>state.video.records;
    export const selectThreeVideos=(state)=>state.video.records.slice(0,3)
    export const getVideosStatus=(state) =>state.video.status;
    export const getVideosError=(state) =>state.video.error;

    export const {prub,selectTres} = videoSlice.actions;
    
    export default videoSlice.reducer;