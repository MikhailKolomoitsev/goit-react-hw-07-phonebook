import axios from 'axios';
import {
  AddContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess, 
  deleteContactError
} from './actions';
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

export const addContact=({name, number})=>dispatch=>{
  const contact={
      name,
      number
  }
  dispatch(AddContactRequest())
  axios
  .post('/contacts', contact)
  .then(({data})=>dispatch(addContactSuccess(data)))
  .catch(error=>dispatch(addContactError(error.message)))
}

export const deleteContact=contactID=>dispatch=>{
dispatch(deleteContactRequest())
axios
.delete(`contacts/${contactID}`)
.then(()=>dispatch(deleteContactSuccess(contactID)))
.catch(error=>dispatch(deleteContactError(error.message)))
}