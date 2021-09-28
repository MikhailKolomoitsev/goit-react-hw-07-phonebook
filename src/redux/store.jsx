import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './reducer'

export default configureStore({
  reducer:{
    contacts:contactsReducer,
  },
})