import axios from 'axios';
// import {
//     getAllContactsRequest,
//     getAllContactsSuccess,
//     getAllContactsError,
// } from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit'

const URL = 'http://localhost:4343';
axios.defaults.baseURL = URL;

export const fetchContacts=createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const contacts =await axios.get('/contacts')
      return contacts.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
   
  }
)

export const addContact=createAsyncThunk(
)



// export const fetchContacts = () => async dispatch => {
//   dispatch(getAllContactsRequest());
//   try {
//       const contacts=await axios.get('/contacts')
//       dispatch(getAllContactsSuccess(contacts.data))
//   } catch (error) {
//     dispatch(getAllContactsError(error))
//   }
// };