import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const getAllContactsRequest = createAction('getAllContactsRequest');
export const getAllContactsSuccess = createAction('getAllContactsSuccess');
export const getAllContactsError = createAction('getAllContactsError');

