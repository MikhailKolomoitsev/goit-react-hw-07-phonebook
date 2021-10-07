import { combineReducers } from 'redux'
import { createReducer, createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'
const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => {
    return action.payload
  },
})
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
})
export default combineReducers({
  entities,
  isLoading,
  error,
})

// const contactsSlice=createSlice({
//   name: 'contacts', 
//   initialState: {entities:[],isLoading: false, error: null, filter:'' },
//   reducers:{
      
//   },
//   extraReducers: {
//     filter: (_, { payload }) => payload,
//     [fetchContacts.fulfilled]:(state, action)=>{
//       // return {
//       //   ...state,
//       //   entities:action.payload, 
//       // }IMMER:
//       state.entities=action.payload
//     },
//     [fetchContacts.pending]:state=>{
//       // return {
//       //   ...state,
//       //   isLoading:true
//       // }
//       state.isLoading=true //IMMER works
//     }
//   }
// })

// export default contactsSlice.reducer