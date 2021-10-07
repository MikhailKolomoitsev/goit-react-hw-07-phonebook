import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const URL = 'http://localhost:4343';
axios.defaults.baseURL = URL;

export const addContact=({name, number})=>dispatch=>{
    const contact={
        id: uuidv4(),
        name,
        number
    }

    dispatch({type: 'addContact/AddContactRequest'})

    axios
    .post('/contacts', contact)
    .then(({data})=>dispatch({type: 'contacts/addContactSuccess', payload:data}))
    .catch(error=>dispatch({type: 'contacts/addContactError', payload:error.message}))
}
export const changeFilter=createAction('contacts/changeFilter')