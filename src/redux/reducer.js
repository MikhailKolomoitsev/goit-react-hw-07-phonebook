import { combineReducers } from 'redux'
import { createReducer, createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'
import { changeFilter } from './actions'
import {
  AddContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
} from './actions'
const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => {
    return action.payload
  },
  [addContactSuccess]: (state, {payload}) => [...state, payload],
  [deleteContactSuccess]:(state, {payload})=>state.filter(({id})=>id!==payload)
})
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [AddContactRequest]:()=>true,
  [addContactSuccess]:()=>false,
  [addContactError]:()=>false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
})
export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})
export default combineReducers({
  entities,
  isLoading,
  error,
})

