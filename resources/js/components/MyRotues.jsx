import React from 'react'
import { Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';
import AddContact from './Pages/AddContact';
import EditContact from './Pages/EditContact';


export default function MyRotues() {
    return (
        <Routes>
            <Route exact path="/" element={<Contact />} />
            <Route exact path="/add-contact" element={<AddContact />} />
            <Route exact path="/edit-contact/:id" element={<EditContact />}/>
        </Routes>
    );
}
