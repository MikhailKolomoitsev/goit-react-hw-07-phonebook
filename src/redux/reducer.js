import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import actions from './actions'
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
} from './actions'

const entities = createReducer([], {
  [getAllContactsSuccess]: (_, action) => {
    return action.payload
  },
})
const isLoading=createReducer(false, {
  [getAllContactsRequest]:()=>true,
  [getAllContactsSuccess]:()=>false,
  [getAllContactsError]:()=>false
})

const error=createReducer(null, {
  [getAllContactsError]:(_, action)=>action.payload,
  [getAllContactsRequest]:()=>null,
})
export  default combineReducers({
  entities,
  isLoading,
  error,
});
