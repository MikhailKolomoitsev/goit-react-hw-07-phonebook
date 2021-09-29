import axios from 'axios';
import {
    getAllContactsRequest,
    getAllContactsSuccess,
    getAllContactsError,
} from './actions';

const URL = 'http://localhost:4343';
axios.defaults.baseURL = URL;

export const fetchContacts = () => async dispatch => {
  dispatch(getAllContactsRequest());
  try {
      const contacts=await axios.get('/contacts')
      dispatch(getAllContactsSuccess(contacts.data))
  } catch (error) {
    dispatch(getAllContactsError(error))
  }
};