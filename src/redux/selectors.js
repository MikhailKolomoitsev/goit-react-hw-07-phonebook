import { createReducer } from "@reduxjs/toolkit"
import { createSelector } from "reselect"

export const getContacts= state => state.contacts.entities
export const getFilter= state => state.filter

export const getFilteredContacts= createSelector(
    [getFilter, getContacts],
    (filter, contacts)=>{
        if(filter){
            const normalizedFilter=filter.toLowerCase()
            return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
        }
        return contacts
    }
)