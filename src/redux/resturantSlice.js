import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call = createAsyncThunk
                                               // action type and its should be a string
export const fetchRestuarant = createAsyncThunk('restuarantList/fetchRestuarant', ()=>{
    // api call
   return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestuarants:[],
        allRestuarantconatainer:[],
        error:''
    },
    reducers:{
        searchResturant:(state,action)=>{
            state.allRestuarants = state.allRestuarantconatainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestuarant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestuarants = action.payload
            state.allRestuarantconatainer = action.payload
            state.error=""
        })
        builder.addCase(fetchRestuarant.rejected,(state,action)=>{
            state.loading=false
            state.allRestuarants = []
            state.error=action.error.message
        })
    }
})

export default restuarantSlice.reducer
export const {searchResturant} = restuarantSlice.actions