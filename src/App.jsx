import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import ListContacts from "./components/ListContacts/ListContacts";
import Filter from "./components/Filter/Filter";

export default function App() {
  return (
    <div className="App">
      <h3>Phonebook</h3>
      <Form />
      <h3>Contacts</h3>
      <p>filter via name</p>
      <Filter />
      <ListContacts />
    </div>
  )
}

